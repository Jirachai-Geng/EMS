import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  response: any = []
  donutDistribution: any;
  barPrevious: any;
  chartMonth: any;

  constructor() { }

  ngOnInit(): void {
    this.donutDistribution = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1000, name: 'AHU' },
            { value: 735, name: 'Lighting' },
            { value: 580, name: 'Pump' },
            { value: 484, name: 'Other' },
          ]
        }
      ],

    };

    this.chartMonth = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Rainfall', 'Evaporation'],
        bottom: 0,

      },
      toolbox: {
        show: false,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Rainfall',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0
          ],
          lineStyle: {
            color: '#CC2115',
          },
        },
        {
          name: 'Evaporation',
          type: 'bar',
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8
          ],
          lineStyle: {
            color: '#CC2115',
          },
        },
        {
          name: 'Evaporation',
          type: 'line',
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8
          ],
          lineStyle: {
            color: '#CC2115',
          },
        }

      ]
    };

    this.barPrevious = {
      tooltip: {
        trigger: 'axis'
      },

      legend: {
        data: ['2020', '2021', '2022'],
        bottom: 0,

      },
      toolbox: {
        show: false,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['2020', '2021', '2022']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '2020',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0
          ],
          lineStyle: {
            color: '#CC2115',
          },
        },
        {
          name: '2021',
          type: 'bar',
          data: [
            2.6, 5.9, 9.0
          ],
          lineStyle: {
            color: '#CC2115',
          },
        },
        {
          name: '2022',
          type: 'bar',
          data: [
            2.0, 4.9, 1.0
          ],
          barStyle: {
            color: '#CC2115',
          },
        },
      ]
    };
  }

  summary_day: boolean = false
  summary_week: boolean = false
  summary_year: boolean = false



  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index === 0) {
      this.summary_day = true
    } else if (tabChangeEvent.index === 1) {
      this.summary_week = true
    } else if (tabChangeEvent.index === 3) {
      this.summary_year = true
    }
  }

}
