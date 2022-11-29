var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [10,11,12,13,12,11,10,11,12,13,12];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(252,70,107,100)",
      borderColor: "rgba(63,94,251,100)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});