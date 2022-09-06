import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  Component,
  Injectable,
} from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

/* Node item*/
export class TodoItemNode {
  children!: TodoItemNode[];
  item!: string;
}

/** Flat item node with expandable and level information */
export class TodoItemFlatNode {
  item!: string;
  level!: number;
  expandable!: boolean;
  code!: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChecklistDatabase {
  response_tree: any = [];
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }

  constructor(private rest: RestService) {
    this.initialize();
  }

  async initialize() {
    // this.response_tree = await this.rest.explore_tree().toPromise();
    const data = this.buildFileTree(this.response_tree, 0);

    this.dataChange.next(data);
  }

  buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({ item: name } as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-explore-graph-b',
  templateUrl: './explore-graph-b.component.html',
  styleUrls: ['./explore-graph-b.component.scss'],
})
export class ExploreGraphBComponent {
  //  fill select parameter
  palette = true;
  // response: any = [];
  ParameterCtr: any = {};
  selectedParameter: string | undefined;
  countPost_api: number = 0;
  post_api: any = {
    conut: this.countPost_api
  };

  // parameter by sensor id (temp is starting for loop checkDupes)
  parameter_positon: any = [[0, 'temp']];

  // check duplicate sensor id in parameter_positon array
  checkDupes(array: any[]) {
    for (var i = 0; i < this.parameter_positon.length; i++) {
      if (this.parameter_positon[i][1] === array[1]) {
        this.parameter_positon[i][0] = array[0];
        return true;
      }
    }
    return false;
  }

  checkDup_tree(checklistArr: any[], treeArr: any[]) {
    const result: any[] = [];
    for (var i = 0; i < checklistArr.length; i++) {
      for (let j = 0; j < treeArr.length; j++) {
        if (checklistArr[i][1] === treeArr[j]) {
          result.push(checklistArr[i]);
        }
      }
    }
    return result;
  }

  onChangeParameter(value: any, position: any) {
    const temp: any[] = [];
    temp.push(value);
    temp.push(position);
    if (this.checkDupes(temp)) {
    } else {
      this.parameter_positon.push(temp);
    }
    this.rest_api(
      this.checklistSelection.selected,
      this.parameter_positon
    );
  }

  rest_api(sensor_id: any, parameter: any) {
    const sensor_idArr: any = [];
    for (let i = 0; i < sensor_id.length; i++) {
      sensor_idArr.push(sensor_id[i].item);
    }
    const result = {
      request: this.checkDup_tree(parameter, sensor_idArr),
      conut: this.countPost_api,
    };
    this.post_api = result
    this.countPost_api++
  }

  /** show font-end checknox in checklist */
  openedChange(opened: boolean) {
    if (opened == closed) {
      this.palette = false;
    } else {
      this.palette = true;
    }
  }

  parameter: string[] = [
    'Active_Energy',
    'Volt_A_N',
    'Volt_B_N',
    'Volt_C_N',
    'Active_Power',
    'Reactive_Power',
    'Power_Factor',
    'Frequency',
  ];


  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(
    true /* multiple */
  );

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );

    database.dataChange.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) =>
    _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    this.nestedNodeMap.forEach((node) => {
      if (node.item === 'Sensor') {
        this.treeControl.expand(node);
      }
    });
    return flatNode;
  };

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every((child) => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  async checkRootNodeSelection(node: TodoItemFlatNode): Promise<void> {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
    await this.rest_api(
      this.checklistSelection.selected,
      this.parameter_positon
    );
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);
    if (currentLevel < 1) {
      return null;
    }
    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];
      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }
}
function output() {
  throw new Error('Function not implemented.');
}