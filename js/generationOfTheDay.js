ctx = document.getElementById("grafic").getContext('2d');

data = {
    labels:['Consumo', 'Economia'],
    datasets:[{
        data:[75,25],
        backgroundColor:['rgb(255, 134, 41)','rgb(176, 176, 176)'],
    }]
};

options= {
    responsive: true,
    maintainAspectRatio: false,
}

myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
});
