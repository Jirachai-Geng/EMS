import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const moc = [
  {
    "DATETIME": "Thu, 06 Oct 2022 10:54 ", 
    "FREQ": 49.9771, 
    "KVARH": 158038.7, 
    "KWH": 793378.43, 
    "Meter_ID": 12, 
    "Name": "AHU B", 
    "PF": 0.586615, 
    "TAP": 2765.07,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 10:54 ", 
    "FREQ": 49.97, 
    "KVARH": 4068706.9, 
    "KWH": 7019517.2, 
    "Meter_ID": 11, 
    "Name": "AHU A", 
    "PF": 0.825, 
    "TAP": 314.592,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 10:54 ", 
    "FREQ": 49.97, 
    "KVARH": 1587967.8, 
    "KWH": 5317645.3, 
    "Meter_ID": 10, 
    "Name": "Tower Cooling", 
    "PF": 0.825, 
    "TAP": 6221.62,
    "Status": "warranty expired"
  }, 
  {
    "DATETIME": "Mon, 26 Sep 2022 14:00 ", 
    "FREQ": 49.97, 
    "KVARH": 24406.5, 
    "KWH": 79540.1, 
    "Meter_ID": 4, 
    "Name": "Tower A", 
    "PF": 0.483, 
    "TAP": 3.524,
    "Status": "offline"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 10:54 ", 
    "FREQ": 49.97, 
    "KVARH": 149275.7, 
    "KWH": 707900.6, 
    "Meter_ID": 5, 
    "Name": "Tower B", 
    "PF": 0.611, 
    "TAP": 26.768,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 10:54 ", 
    "FREQ": 49.97, 
    "KVARH": 2442220.8, 
    "KWH": 1390514.8, 
    "Meter_ID": 15, 
    "Name": "Water pump", 
    "PF": 0.067, 
    "TAP": 2949.462,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 10:54 ", 
    "FREQ": 49.97, 
    "KVARH": 55976.1, 
    "KWH": 316945.3, 
    "Meter_ID": 16, 
    "Name": "Water treatment", 
    "PF": 0.68, 
    "TAP": 11.12,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 10:54 ", 
    "FREQ": 49.97, 
    "KVARH": 15818.2, 
    "KWH": 89479.5, 
    "Meter_ID": 17, 
    "Name": "Drain pump", 
    "PF": 0.766, 
    "TAP": 20.862,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 01:54 ", 
    "FREQ": 49.97, 
    "KVARH": 1023315.2, 
    "KWH": 2964998.3, 
    "Meter_ID": 6, 
    "Name": "PL A1", 
    "PF": 0.916, 
    "TAP": 311.92,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 01:54 ", 
    "FREQ": 50.04, 
    "KVARH": 3249692.7, 
    "KWH": 2264258.3, 
    "Meter_ID": 8, 
    "Name": "PL A2", 
    "PF": -1, 
    "TAP": 220.416,
    "Status": "error(PF)"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 01:54 ", 
    "FREQ": 49.93, 
    "KVARH": 885835.0, 
    "KWH": 778826.4, 
    "Meter_ID": 7, 
    "Name": "PL B1", 
    "PF": 0.8, 
    "TAP": 96.272,
    "Status": "online"
  }, 
  {
    "DATETIME": "Thu, 06 Oct 2022 01:54 ", 
    "FREQ": 49.95, 
    "KVARH": 3102118.8, 
    "KWH": 5027491.6, 
    "Meter_ID": 9, 
    "Name": "PL B2", 
    "PF": 0.654, 
    "TAP": 184.26,
    "Status": "online"
  }, 
]

@Component({
  selector: 'app-all-meter',
  templateUrl: './all-meter.component.html',
  styleUrls: ['./all-meter.component.scss']
})

export class AllMeterComponent implements OnInit  {
  response:any = [];
  dataSource:any = [];
  displayedColumns: string[] = [
    'Meter_ID',
    'Name',
    'DATETIME',
    'Active_Energy',
    'Active_Power',
    'KVARH',
    'Power_Factor',
    'Frequency',
    'Status'
  ];

  constructor() {}
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit(): Promise<void> {
    // this.response = await this.rest.power_quality_allmeter().toPromise();
    this.dataSource = new MatTableDataSource(moc);
    this.dataSource.sort = this.sort;
  }
}
