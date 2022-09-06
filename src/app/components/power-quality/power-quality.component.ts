import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-power-quality',
  templateUrl: './power-quality.component.html',
  styleUrls: ['./power-quality.component.scss'],
})
export class PowerQualityComponent implements OnInit {
  idMDB: number | undefined;
  response: any = [];
  mylist = [1, 2, 3];
  selected: any;
  meter_name = '1'

  cards = [
    { id: 16, title: 'Main', sub_title: 'จ่ายไฟตึก 2' },
  ];

  time = new Date();
  displayedColumns: string[] = ['Parameter', 'Base', 'Units', 'Limits', 'Value', 'Alerts'];
  Voltage_line_to_line = [
    { Parameter: 'Va-b', Base: '400', Units: 'Voltage', Value: '', Limits: '±10%', Alerts: '' },
    { Parameter: 'Vb-c', Base: '400', Units: 'Voltage', Value: '', Limits: '±10%', Alerts: '' },
    { Parameter: 'Vc-a', Base: '400', Units: 'Voltage', Value: '', Limits: '±10%', Alerts: '' },
    { Parameter: 'Vavg', Base: '400', Units: 'Voltage', Value: '', Limits: '±10%', Alerts: '' },
  ];
  Unbalance_voltage = [
    { Parameter: 'Negative-sequence voltage', Base: '400', Units: 'Voltage', Value: '', Limits: '', Alerts: '' },
    { Parameter: 'Positive-sequence voltage', Base: '400', Units: 'Voltage', Value: '', Limits: '', Alerts: '' },
    { Parameter: '%Unbalance voltage', Base: '400', Units: '%', Value: '', Limits: '2%', Alerts: '' },
  ];
  Freq = [
    { Parameter: 'Freq', Base: '50', Units: 'Hz', Value: '', Limits: '±0.5', Alerts: '' },
  ];
  Current = [
    { Parameter: 'Ia', Base: '400', Units: 'Amp', Value: '', Limits: '75% Breaker', Alerts: '' },
    { Parameter: 'Ib', Base: '400', Units: 'Amp', Value: '', Limits: '75% Breaker', Alerts: '' },
    { Parameter: 'Ic', Base: '400', Units: 'Amp', Value: '', Limits: '75% Breaker', Alerts: '' },
    { Parameter: 'In', Base: '400', Units: 'Amp', Value: '', Limits: '', Alerts: '' },
    { Parameter: 'Iare', Base: '400', Units: 'Amp', Value: '', Limits: '', Alerts: '' },
  ];
  Power_quality = [
    { Parameter: 'P', Base: '', Units: 'kW', Value: '', Limits: '', Alerts: '' },
    { Parameter: 'Q', Base: '', Units: 'kvar', Value: '', Limits: '', Alerts: '' },
    { Parameter: 'S', Base: '', Units: 'kVA', Value: '', Limits: '', Alerts: '' },
  ];
  Power_factor_quality = [
    { Parameter: 'PFa', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
    { Parameter: 'PFb', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
    { Parameter: 'PFc', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
    { Parameter: 'PF', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
  ];
  Total_harmonic_voltage = [
    { Parameter: '%THDVa', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: '%THDVb', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: '%THDVc', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
  ];
  Total_harmonic_current = [
    { Parameter: '%THDIa', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: '%THDIb', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: '%THDIc', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: '%THDIn', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
  ];
  Harmonic_distortion = [
    { Parameter: 'I3', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: 'I5', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: 'I7', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: 'I9', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: 'I11', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: 'I13', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
    { Parameter: 'I15', Base: '<8%', Units: '%', Value: '', Limits: 'IEEE519-1992 8% for MDB', Alerts: '' },
  ];

  // active class onclick in ngFor
  selectedIndex = 0;

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  // --------------------------

  constructor(private router: Router) {
  }

  async ngOnInit() {
    // this.response = await this.rest.power_quality('6').toPromise();
    this.Voltage_line_to_line = [
      { Parameter: 'Va-b', Base: '400', Units: 'Voltage', Value: this.response.Va_b, Limits: '±10%', Alerts: '' },
      { Parameter: 'Vb-c', Base: '400', Units: 'Voltage', Value: this.response.Vb_c, Limits: '±10%', Alerts: '' },
      { Parameter: 'Vc-a', Base: '400', Units: 'Voltage', Value: this.response.Vc_a, Limits: '±10%', Alerts: '' },
      { Parameter: 'Vavg', Base: '400', Units: 'Voltage', Value: this.response.Vage, Limits: '±10%', Alerts: '' },
    ];
    this.Freq = [
      { Parameter: 'Freq', Base: '50', Units: 'Hz', Value: this.response.Freq, Limits: '±0.5', Alerts: '' },
    ];
    this.Current = [
      { Parameter: 'Ia', Base: '400', Units: 'Amp', Value: this.response.Ia, Limits: '75% Breaker', Alerts: '' },
      { Parameter: 'Ib', Base: '400', Units: 'Amp', Value: this.response.Ib, Limits: '75% Breaker', Alerts: '' },
      { Parameter: 'Ic', Base: '400', Units: 'Amp', Value: this.response.Ic, Limits: '75% Breaker', Alerts: '' },
      { Parameter: 'In', Base: '400', Units: 'Amp', Value: '', Limits: '', Alerts: '' },
      { Parameter: 'Iare', Base: '400', Units: 'Amp', Value: '', Limits: '', Alerts: '' },
    ];
    this.Power_factor_quality = [
      { Parameter: 'PFa', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
      { Parameter: 'PFb', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
      { Parameter: 'PFc', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
      { Parameter: 'PF', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
    ];
  }

  // sync function child(select-mdb)
  childToParent(name: number | undefined) {
    this.idMDB = name;
    this.newdata(this.idMDB);
  }

  async newdata(_unit_tpye: any) {
    // this.response = await this.rest.power_quality(_unit_tpye).toPromise();
    this.Voltage_line_to_line = [
      { Parameter: 'Va-b', Base: '400', Units: 'Voltage', Value: this.response.Va_b, Limits: '±10%', Alerts: '' },
      { Parameter: 'Vb-c', Base: '400', Units: 'Voltage', Value: this.response.Vb_c, Limits: '±10%', Alerts: '' },
      { Parameter: 'Vc-a', Base: '400', Units: 'Voltage', Value: this.response.Vc_a, Limits: '±10%', Alerts: '' },
      { Parameter: 'Vavg', Base: '400', Units: 'Voltage', Value: this.response.Vage, Limits: '±10%', Alerts: '' },
    ];
    this.Freq = [
      { Parameter: 'Freq', Base: '50', Units: 'Hz', Value: this.response.Freq, Limits: '±0.5', Alerts: '' },
    ];
    this.Current = [
      { Parameter: 'Ia', Base: '400', Units: 'Amp', Value: this.response.Ia, Limits: '75% Breaker', Alerts: '' },
      { Parameter: 'Ib', Base: '400', Units: 'Amp', Value: this.response.Ib, Limits: '75% Breaker', Alerts: '' },
      { Parameter: 'Ic', Base: '400', Units: 'Amp', Value: this.response.Ic, Limits: '75% Breaker', Alerts: '' },
      { Parameter: 'In', Base: '400', Units: 'Amp', Value: '', Limits: '', Alerts: '' },
      { Parameter: 'Iare', Base: '400', Units: 'Amp', Value: '', Limits: '', Alerts: '' },
    ];
    this.Power_factor_quality = [
      { Parameter: 'PFa', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
      { Parameter: 'PFb', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
      { Parameter: 'PFc', Base: '0.85', Units: '', Value: '', Limits: '> 0.85', Alerts: '' },
      { Parameter: 'PF', Base: '0.85', Units: '', Value: this.response.PF, Limits: '> 0.85', Alerts: '' },
    ];
  }

  button_allmeter() {
    this.router.navigate(['/all-meter']);
  }

}
