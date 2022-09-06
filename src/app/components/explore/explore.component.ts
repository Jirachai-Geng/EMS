import {
  Component,
  Directive,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';

import { RestService } from 'src/app/services/rest.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ExploreGraphAComponent } from '../explore-graph-a/explore-graph-a.component';
import { ExploreGraphBComponent } from '../explore-graph-b/explore-graph-b.component';
import { ExploreGraphCComponent } from '../explore-graph-c/explore-graph-c.component';
import { ExploreGraphDComponent } from '../explore-graph-d/explore-graph-d.component';

@Directive({ selector: 'child-directive' })
class ChildDirective {
  @Input() post_api!: any;
}
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements AfterViewInit {
  timezone = new Date().getTimezoneOffset();
  date = new Date();
  responseA: any = [];
  responseB: any = [];
  responseC: any = [];
  responseD: any = [];
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  countA: number = 0;
  countB: number = 0;
  countC: number = 0;
  countD: number = 0;

  range_graphA = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private rest: RestService, private datePipe: DatePipe) {}
  check_graphA: boolean = true;
  check_graphB: boolean = false;
  check_graphC: boolean = false;
  check_graphD: boolean = false;

  check_SelectgraphA: boolean = true;
  check_SelectgraphB: boolean = false;
  check_SelectgraphC: boolean = false;
  check_SelectgraphD: boolean = false;

  date_start: any = this.datePipe.transform(this.firstDay, 'MM/dd/yyyy');
  date_end: any = this.datePipe.transform(this.lastDay, 'MM/dd/yyyy');

  @ViewChild(ExploreGraphAComponent) child_graphA!: ChildDirective;
  @ViewChild(ExploreGraphBComponent) child_graphB!: ChildDirective;
  @ViewChild(ExploreGraphCComponent) child_graphC!: ChildDirective;
  @ViewChild(ExploreGraphDComponent) child_graphD!: ChildDirective;

  ngOnInit(): void {}

  ngAfterViewInit() {
    setInterval(() => {
      if (this.check_graphA) {
        if (this.countA == this.child_graphA.post_api.conut) {
        } else {
          this.rander_GraphA(
            this.child_graphA.post_api,
            this.date_start,
            this.date_end
          );
          this.countA = this.child_graphA.post_api.conut;
        }
      }
    }, 1500);

    setInterval(() => {
      if (this.check_graphB) {
        if (this.countB == this.child_graphB.post_api.conut) {
        } else {

          this.countB = this.child_graphB.post_api.conut;
        }
      }
    }, 1500);

    setInterval(() => {
      if (this.check_graphC) {
        if (this.countC == this.child_graphC.post_api.conut) {
        } else {

          this.countC = this.child_graphC.post_api.conut;
        }
      }
    }, 1500);

    setInterval(() => {
      if (this.check_graphD) {
        if (this.countD == this.child_graphD.post_api.conut) {
        } else {

          this.countD = this.child_graphD.post_api.conut;
        }
      }
    }, 1500);
  }

  async rander_GraphA(value: any, time_start: any, time_end: any) {
    if (value.request[0]) {
      if (this.child_graphA.post_api != undefined) {
        const post_api = {
          request: value.request,
          start_date: time_start,
          end_date: time_end,
        };
        // this.responseA = await this.rest.explore_api(post_api).toPromise();

      }
    }
  }

  // async rander_GraphB(value: any, time_start: any, time_end: any) {
  //   if (value.request[0]) {
  //     if (this.child_graphB.post_api != undefined) {
  //       const post_api = {
  //         request: value.request,
  //         start_date: time_start,
  //         end_date: time_end,
  //       };
  //       this.responseB = await this.rest.explore_api(post_api).toPromise();
  //       this.graphB = new StockChart({
  //         time: {
  //           timezoneOffset: this.timezone,
  //         },
  //         rangeSelector: {
  //           enabled: false,
  //         },
  //         title: {
  //           text: undefined,
  //         },
  //         series: this.responseB.result,
  //         navigator: {
  //           enabled: true,
  //         },
  //         credits: {
  //           enabled: false,
  //         },
  //         legend: {
  //           enabled:true,
  //           itemStyle: {
  //             fontSize: '10px',
  //           },
  //         },
  //       });
  //     }
  //   }
  // }

  // async rander_GraphC(value: any, time_start: any, time_end: any) {
  //   if (value.request[0]) {
  //     if (this.child_graphC.post_api != undefined) {
  //       const post_api = {
  //         request: value.request,
  //         start_date: time_start,
  //         end_date: time_end,
  //       };
  //       this.responseC = await this.rest.explore_api(post_api).toPromise();
  //       this.graphC = new StockChart({
  //         time: {
  //           timezoneOffset: this.timezone,
  //         },
  //         rangeSelector: {
  //           enabled: false,
  //         },
  //         title: {
  //           text: undefined,
  //         },
  //         series: this.responseC.result,
  //         navigator: {
  //           enabled: true,
  //         },
  //         credits: {
  //           enabled: false,
  //         },
  //         legend: {
  //           enabled:true,
  //           itemStyle: {
  //             fontSize: '10px',
  //           },
  //         },
  //       });
  //     }
  //   }
  // }

  // async rander_GraphD(value: any, time_start: any, time_end: any) {
  //   if (value.request[0]) {
  //     if (this.child_graphD.post_api != undefined) {
  //       const post_api = {
  //         request: value.request,
  //         start_date: time_start,
  //         end_date: time_end,
  //       };
  //       this.responseD = await this.rest.explore_api(post_api).toPromise();
  //       this.graphD = new StockChart({
  //         time: {
  //           timezoneOffset: this.timezone,
  //         },
  //         rangeSelector: {
  //           enabled: false,
  //         },
  //         title: {
  //           text: undefined,
  //         },
  //         series: this.responseD.result,
  //         navigator: {
  //           enabled: true,
  //         },
  //         credits: {
  //           enabled: false,
  //         },
  //         legend: {
  //           enabled:true,
  //           itemStyle: {
  //             fontSize: '10px',
  //           },
  //         },
  //       });
  //     }
  //   }
  // }

  async dateRangeChangeGraphA(
    dateRangeStart: HTMLInputElement,
    dateRangeEnd: HTMLInputElement
  ) {
    this.date_start = dateRangeStart.value;
    this.date_end = dateRangeEnd.value;
    if (this.child_graphA.post_api) {
      this.rander_GraphA(
        this.child_graphA.post_api,
        this.date_start,
        this.date_end
      );
    }
  }


  activebutton = 0;
  setIndex(indext: number) {
    this.activebutton = indext;
    if (this.activebutton == 0) {
      this.check_graphA = true;
      this.check_SelectgraphA = true;
      this.check_SelectgraphB = false;
      this.check_SelectgraphC = false;
      this.check_SelectgraphD = false;
    } else if (this.activebutton == 1) {
      this.check_graphB = true;
      this.check_SelectgraphA = false;
      this.check_SelectgraphB = true;
      this.check_SelectgraphC = false;
      this.check_SelectgraphD = false;
    } else if (this.activebutton == 2) {
      this.check_graphC = true;
      this.check_SelectgraphA = false;
      this.check_SelectgraphB = false;
      this.check_SelectgraphC = true;
      this.check_SelectgraphD = false;
    } else if (this.activebutton == 3) {
      this.check_graphD = true;
      this.check_SelectgraphA = false;
      this.check_SelectgraphB = false;
      this.check_SelectgraphC = false;
      this.check_SelectgraphD = true;
    }
  }

  /* slide setting tab (** kill all graph dom but rerander) & show/hide buttom settings */
  hidesetting: boolean = false;
  close_setting() {
    this.hidesetting = !this.hidesetting;
    if (this.countA > 0) {
      this.rander_GraphA(
        this.child_graphA.post_api,
        this.date_start,
        this.date_end
      );
    }

  }

  /* close graph (** kill this graph dom) & switch to buttom GraphA */
  close_graph(index_close: number) {
    if (index_close == 1) {
      this.check_graphB = false;
      this.activebutton = 0;
    } else if (index_close == 2) {
      this.check_graphC = false;
      this.activebutton = 0;
    } else if (index_close == 3) {
      this.check_graphD = false;
      this.activebutton = 0;
    }
  }
}
