const data = {
    labels: ['', '', '', '', '', '', '','', '', '', '', '', '', ''],
    datasets: [{
      label: 'Lorem Ipsum',
      data: [18, 12, 6, 9, 12, 3, 9,18, 12, 6, 9, 12, 3, 9],
      backgroundColor:
        'rgba(255, 26, 104, 0.2)',
      borderColor:
        'rgba(255, 26, 104, 1)',
      borderWidth: 1
    },{
        label: 'Lorem Ipsum',
        data: [-18, -12, -6, -9, -12, -3, -9,-18, -12, -6, -9, -12, -3, -9],
        backgroundColor:
            'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
          x:{
              stacked:true,
              position:'top'
          },
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );