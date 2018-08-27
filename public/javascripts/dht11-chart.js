const canvas = document.getElementById('dht11');
let data = {
  labels: ['Status'],
  datasets: [{
    label: '溫度偵測',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 5,
    pointHitRadius: 10,
    data: [28],
  },
  {
    label: '濕度偵測',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(39,119,182,.4)',
    borderColor: 'rgba(39,119,182,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(39,119,182,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(39,119,182,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 5,
    pointHitRadius: 10,
    data: [50],
  }],
};

const option = {
  showLines: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100
      },
    }],
  },
};
const tempChart = Chart.Line(canvas, {
  data: data,
  options: option,
});
