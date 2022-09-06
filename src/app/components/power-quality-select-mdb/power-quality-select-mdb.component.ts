import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-power-quality-select-mdb',
  templateUrl: './power-quality-select-mdb.component.html',
  styleUrls: ['./power-quality-select-mdb.component.scss']
})
export class PowerQualitySelectMdbComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() sub_title:string | undefined;
  @Input() id: number | undefined;
  @Output() childToParent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  sendToParent(idMDB: number | undefined) {
    this.childToParent.emit(idMDB);
  }
}
