import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  response: any = [];
  response_peak: any = [];
  time = new Date();
  firstDay = new Date(this.time.getFullYear(), this.time.getMonth(), 1);
  unit_tpye_header = 'kwh'

  /* select transformer */
  open_peak1:boolean = true
  open_peak2:boolean = false

  // active class onclick
  activebutton = 0;
  indext = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setIndex(indext: number) {
    this.activebutton = indext;
    if ( this.activebutton == 0){this.unit_tpye_header = 'kwh' }
    else if ( this.activebutton == 1){this.unit_tpye_header = 'thb' }
    else if ( this.activebutton == 2){this.unit_tpye_header = 'kgco2' }
    this.newdata(this.unit_tpye_header)
  }

  
  async newdata(_unit_tpye: any){
    // this.response = await this.rest.dashboard_header(_unit_tpye).toPromise();
    // this.response_peak = await this.rest.dashboard_header_peak(_unit_tpye).toPromise();
  }

  isDataLoaded: boolean = true;


  check_thansformer(check:boolean){
    if (check == true){
      return false
    }else {
      return true
    }
  }

  check_per_down(check:boolean){
    if (check == true){
      return false
    }else {
      return true
    }
  }

  check_per_up(check:boolean){
    if (check == true){
      return true
    }else {
      return false
    }
  }

}
