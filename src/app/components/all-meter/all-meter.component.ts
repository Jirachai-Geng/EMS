import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-meter',
  templateUrl: './all-meter.component.html',
  styleUrls: ['./all-meter.component.scss']
})
export class AllMeterComponent implements OnInit  {
  response:any = [];
  dataSource:any = [];
  displayedColumns: string[] = [
    'meter_name',
    'Name',
    'DATETIME',
    'Active_Energy',
    'Active_Power',
    'Power_Factor',
    'Frequency',
  ];

  constructor() {}
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit(): Promise<void> {
    // this.response = await this.rest.power_quality_allmeter().toPromise();
    this.dataSource = new MatTableDataSource(this.response);
    this.dataSource.sort = this.sort;
  }
}
