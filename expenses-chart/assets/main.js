Chart.defaults.global.legend.display = false;

const ctx = document.getElementById('myChart').getContext('2d')

var options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
}

const data = database;

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(index => {
        return index.day
    }) ,
    datasets: [
      {
        data: data.map(index => {
            return index.amount
        }),
        backgroundColor: [
          'hsl(10, 79%, 65%)',
          'hsl(10, 79%, 65%)',
          'hsl(186, 34%, 60%)',
          'hsl(10, 79%, 65%)',
          'hsl(10, 79%, 65%)',
          'hsl(10, 79%, 65%)',
          'hsl(10, 79%, 65%)',
          'hsl(10, 79%, 65%)'
        ],
        borderWidth: 0
      }
    ]
  },
  options: options
})
