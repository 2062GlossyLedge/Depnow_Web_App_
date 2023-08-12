/* globals Chart:false */

// (() => {
//   'use strict'

//   // Graphs
//   const ctx = document.getElementById('myChart')
//   // eslint-disable-next-line no-unused-vars
//   const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday'
//       ],
//       datasets: [{
//         data: [
//           15339,
//           21345,
//           18483,
//           24003,
//           23489,
//           24092,
//           12034
//         ],
//         lineTension: 0,
//         backgroundColor: 'transparent',
//         borderColor: '#007bff',
//         borderWidth: 4,
//         pointBackgroundColor: '#007bff'
//       }]
//     },
//     options: {
//       plugins: {
//         legend: {
//           display: false
//         },
//         tooltip: {
//           boxPadding: 3
//         }
//       }
//     }
//   })
// })()

// DEFINE CHART LOCATIONS (IDS)
// -----------------------------
// Main chart render location
let chart1Id = 'chart1';
let chart2Id = 'chart2';
let chart3Id = 'chart3';

// CHART DATA
// -----------------------------
let sales = [[19.98], [9.99], [9.99], [29.97], [9.99]];
let income = [
  500, 1000, 2500, 700, 3500, 600, 1000, 1000, 1000, 800, 3000, 4500, 5000,
];
let dates = [
  '01/07',
  '02/07',
  '03/07',
  '04/07',
  '05/07',
  '06/07',
  '07/07',
  '08/07',
  '09/07',
  '10/07',
  '11/07',
  '12/07',
  '13/07',
];

// CHART CONFIG
// -----------------------------

// Chart 1
let chart1Data = {
  type: 'ring',
  globals: {
    fontFamily: 'Poppins',
  },
  backgroundColor: 'transparent',
  plot: {
    valueBox: {
      text: '81%<br>Progress towards <br>current badge',
      fontSize: '17px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      placement: 'center',
    },
    slice: '80%',
  },
  plotarea: {
    margin: '0px 0px 0px 0px',
  },
  series: [
    {
      values: [81],
      backgroundColor: 'var(--yellow)',
      borderWidth: '0px',
      shadow: false,
    },
    {
      values: [29],
      backgroundColor: 'var(--lightGray)',
      borderWidth: '0px',
      shadow: false,
    },
  ],
};

// Chart 2
let chart2Data = {
  graphset: [
    {
      type: 'pie',
      title: {
        text: 'Time Focused Distribution',
        align: 'left',
        backgroundColor: 'var(--lightPurple)',
        fontColor: '#fff',
      },
      backgroundColor: 'var(--lightPurple)',

      legend: {
        text: '%t<br>',
        borderWidth: '0px',
        backgroundColor: 'var(--lightPurple)',

        header: {
          // text: 'Business Units',
          align: 'right',
          bold: true,
          fontColor: '#616161',
          fontSize: 'auto'
        },
        item: {
          align: 'center',
          padding: '10px',
          borderRadius: '3px',
          fontColor: '#fff',
          width: '115px',
        },
        itemOff: {
          alpha: 0.7,
          fontColor: '#616161',
          lineWidth: '2px',
          textAlpha: 1,
          textDecoration: 'line-through'
        },
        markerOff: {
          alpha: 0.2
        },
        toggleAction: 'remove',
        verticalAlign: 'middle',
        width: '140px'
      },
      plot: {
        valueBox: {
          decimals: 2
        },
        animation: {
          effect: 'ANIMATION_EXPAND_VERTICAL',
          method: 'ANIMATION_BACK_EASE_OUT',
          onLegendToggle: false,
          sequence: 'ANIMATION_BY_PLOT'
        },
        decimals: 0,
        detach: false,
        refAngle: 270,
        thousandsSeparator: ',',
      },
      scale: {
        sizeFactor: 0.75
      },
      tooltip: {
        text: '%t<br>$%v',
        align: 'right',
        bold: true,
        borderRadius: '3px',
        fontColor: '#fff',
        offsetR: 10,
        placement: 'node:out',
        width: '110px'
      },
      series: [
        {
          text: 'Calc 2 ',
          values: [11],
          url: '//cdn.zingchart.com/resources/XUWNNU55_pie_level2_purp.txt',
          target: 'graph',
          tooltip: {
            backgroundColor: '#4527A0'
          },
          backgroundColor: '#4527A0',
          legendItem: {
            backgroundColor: '#4527A0'
          },
          legendMarker: {
            type: 'circle',
            backgroundColor: '#fff',
            borderColor: '#4527A0',
            borderWidth: '4px',
            size: '7px'
          },
          legendText: '%t<br><b>%vhrs</b>'
        },
        {
          text: 'CS 3500 ',
          values: [9],
          url: '//cdn.zingchart.com/resources/XUWNNU55_pie_level2_blue.txt',
          target: 'graph',
          backgroundColor: '#1565C0',
          legendItem: {
            backgroundColor: '#1565C0'
          },
          legendMarker: {
            type: 'circle',
            backgroundColor: '#fff',
            borderColor: '#1565C0',
            borderWidth: '4px',
            size: '7px'
          },
          legendText: '%t<br><b>%vhrs</b>'
        },
        {
          text: 'Bank App project',
          values: [8],
          url: '//cdn.zingchart.com/resources/XUWNNU55_pie_level2_red.txt',
          target: 'graph',
          backgroundColor: '#AD1457',
          legendItem: {
            backgroundColor: '#AD1457'
          },
          legendMarker: {
            type: 'circle',
            backgroundColor: '#fff',
            borderColor: '#AD1457',
            borderWidth: '4px',
            size: '7px'
          },
          legendText: '%t<br><b>%vhrs</b>'
        },
        {
          text: 'WRTG2010 ',
          values: [6],
          url: '//cdn.zingchart.com/resources/XUWNNU55_pie_level2_green.txt',
          target: 'graph',
          backgroundColor: '#00695C',
          legendItem: {
            backgroundColor: '#00695C'
          },
          legendMarker: {
            type: 'circle',
            backgroundColor: '#fff',
            borderColor: '#00695C',
            borderWidth: '4px',
            size: '7px'
          },
          legendText: '%t<br><b>%vhrs</b>'
        },
        {
          text: 'Hackerank problems',
          values: [4],
          url: '//cdn.zingchart.com/resources/XUWNNU55_pie_level2_orange.txt',
          target: 'graph',
          backgroundColor: '#EF6C00',
          legendItem: {
            backgroundColor: '#EF6C00'
          },
          legendMarker: {
            type: 'circle',
            backgroundColor: '#fff',
            borderColor: '#EF6C00',
            borderWidth: '4px',
            size: '7px'
          },
          legendText: '%t<br><b>%vhrs</b>'
        }
      ]
    }
  ],
  history: {
    borderColor: '#616161',
    borderRadius: '2px',
    borderWidth: '3px',
    item: {
      text: 'Some Text',
      backgroundColor: '#616161',
      borderColor: '#616161',
      fontColor: 'red',
      fontSize: '10px'
    },
    itemOff: {
      backgroundColor: '#dcdcdc',
      borderColor: '#6161663',
      size: '3px',
      width: '3px',
      height: '3px'
    },
    width: '45px',
    height: '30px',
    y: '40px'
  }
};

zingchart.render({
  id: 'chart2Id',
  data: chart2Data,
  cacheControl: '',
  height: '100%',
  width: '100%',
});
//   type: 'pie',
//   globals: {
//     fontFamily: 'Poppins',
//   },
//   backgroundColor: 'transparent',
//   title: {
//     text: 'Time Focused Distribution',
//     align: 'left',
//     fontColor: 'var(--lightGray)',
//     fontWeight: 'normal',
//     padding: '16px',
//   },
//   plot: {
//     tooltip: {
//       visible: false,
//     },
//     barSpace: '32px',
//     barWidth: '12px',
//     borderWidth: '2px',
//     color: 'var(--purple)'
//   },
//   plotarea: {
//     margin: '40px 56px 16px 56px',
//   },
//   scaleY: {
//     visible: false,
//   },
//   scaleX: {
//     labels: [],
//     lineWidth: '0px',
//     tick: {
//       visible: false,
//     },
//   },
//   scaleX2: {
//     values: [
//       '$' + sales[0],
//       '$' + sales[1],
//       '$' + sales[2],
//       '$' + sales[3],
//       '$' + sales[4],
//     ],
//     lineWidth: '0px',
//     tick: {
//       visible: false,
//     },
//   },
//   series: [
//     {
//       values: sales[0],
//       backgroundColor: 'var(--purple)',
//     },
//     {
//       values: sales[1],
//       backgroundColor: 'var(--yellow)',
//     },
//     {
//       values: sales[2],
//       backgroundColor: 'var(--red)',
//     },
//     {
//       values: sales[3],
//       backgroundColor: 'var(--green)',
//     },
//     {
//       values: sales[4],
//       backgroundColor: 'var(--lightpurple)',
//     },
//   ],
// };

// Chart 3
let chart3Data = {
  type: 'line',
  globals: {
    fontFamily: 'Poppins',
  },
  title: {
    text: "Time Focused Per Month",
    fontColor: "#fff"
  },
  backgroundColor: 'transparent',
  scaleX: {
    labels: dates,
    tick: {
      visible: false,
    },
  },
  scaleY: {
    values: '0: 5000: 2500',
    guide: {
      lineStyle: 'solid',
      lineColor: 'var(--lightGray)',
    },
    lineWidth: '0px',
    tick: {
      visible: false,
    },
  },
  series: [
    {
      values: income,
      lineColor: 'var(--yellow)',
      lineWidth: '5px',
      marker: {
        backgroundColor: 'var(--lightPurple)',
        borderColor: 'var(--yellow)',
        borderWidth: '3px',
        size: 8,
      },
    },
  ],
};

// RENDER CHARTS
// -----------------------------

// Chart 1
zingchart.render({
  id: chart1Id,
  data: chart1Data,
  height: '300px',
  width: '100%',
});

// Chart 2
zingchart.render({
  id: chart2Id,
  data: chart2Data,
  height: '300px',
  width: '100%',
});

// Chart 3
zingchart.render({
  id: chart3Id,
  data: chart3Data,
  height: '250px',
  width: '100%',
});