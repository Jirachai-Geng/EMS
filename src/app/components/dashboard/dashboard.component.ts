import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

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
  chartWeek: any;
  chartYears: any;
  chartDay: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.donutDistribution = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: 0,
        padding: [
          20,  // up
          0, // right
          0,  // down
          0, // left
        ]
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          avoidLabelOverlap: false,
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
        data: ['last month', 'this month'],
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
          data: [      1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7, 
            8, 
            9, 
            10, 
            11, 
            12, 
            13, 
            14, 
            15, 
            16, 
            17, 
            18, 
            19, 
            20, 
            21, 
            22, 
            23, 
            24, 
            25, 
            26, 
            27, 
            28, 
            29, 
            30, 
            31]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'last month',
          type: 'bar',
          data: [
            11116, 
      20953, 
      22800, 
      22371, 
      22065, 
      23757, 
      6182, 
      10993, 
      20649, 
      23550, 
      14773, 
      149, 
      145, 
      155, 
      9966, 
      37779, 
      55249, 
      55767, 
      54306, 
      29940, 
      2494, 
      31996, 
      50434, 
      54116, 
      54461, 
      58324, 
      31927, 
      2648, 
      31605, 
      54619, 
      56446
          ],
          color: '#5FBD36',

        },
        {
          name: 'this month',
          type: 'bar',
          data: [
            55161, 
      55943, 
      33439, 
      2675, 
      31305, 
      51757, 
      55346, 
      55611, 
      55868, 
      31845, 
      2149, 
      31675, 
      49907, 
      58926, 
      54720, 
      56284, 
      30917, 
      2302, 
      32676, 
      54603, 
      54481, 
      55212, 
      54170, 
      29057, 
      1420, 
      30338, 
      48872, 
      56633, 
      46738, 
      null, 
      null
          ],
          color: '#506197'
        },
      ]
    };

    this.chartWeek = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['last week', 'this week'],
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
          data: ["MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT",
            "SUN"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'last week',
          type: 'bar',
          data: [
            32676,
            54603,
            54481,
            55212,
            54170,
            29057,
            1420
          ],
          color: '#5FBD36',

        },
        {
          name: 'this week',
          type: 'bar',
          data: [
            30338,
            48872,
            56633,
            2817,
            null,
            null,
            null
          ],
          color: '#506197'
        },
      ]
    };

    this.chartDay = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['yesterday', 'today'],
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
          data: [0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'yesterday',
          type: 'bar',
          data: [
            1820, 
      2291, 
      2310, 
      2287, 
      2215, 
      2052, 
      1985, 
      2112, 
      2397, 
      2387, 
      2548, 
      2335, 
      2658, 
      2740, 
      2771, 
      2800, 
      2697, 
      2327, 
      2141, 
      2112, 
      2398, 
      2437, 
      2450, 
      2354
          ],
          color: '#5FBD36',

        },
        {
          name: 'today',
          type: 'bar',
          data: [
            1820, 
      2291, 
      2310, 
      2287, 
      2215, 
      2052, 
      1985, 
      2112, 
      2397, 
      2387, 
      2548, 
      2335, 
      2658, 
      2740, 
      2771, 
      2800, 
      2697, 
      2327, 
      2141, 
      2112, 
      2398, 
      2437, 
      2450, 
      2354
          ],
          color: '#506197'
        },
      ]
    };

    this.chartYears = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['last years', 'this years'],
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
          data: [ "Jan", 
          "Feb", 
          "Mar", 
          "Apr", 
          "May", 
          "Jun", 
          "Jul", 
          "Aug", 
          "Sep", 
          "Oct", 
          "Nov", 
          "Dec"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'last years',
          type: 'bar',
          data: [
            121.2, 151.2, 160, 173.2, 125.6, 156.7, 135.6, 122.2, 132.6
          ],
          color: '#5FBD36',

        },
        {
          name: 'this years',
          type: 'bar',
          data: [
            121.2, 151.2, 160, 173.2, 125.6, 156.7, 135.6, 142.2, 148.7
          ],
          color: '#506197'
        },
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

  onAllMeter(){
    this.router.navigate(['/all-meter']);
  }


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
