const ctx = document.getElementById('myChart');

let dataArray = []
let labelArray = []

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelArray,
        datasets: [{
            label: 'Stock Prices',
            data: dataArray,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});