var ctx = document.getElementById('myChart').getContext('2d');

    
    gradient = ctx.createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, 'rgba(255, 0,0, 0.2)');
    gradient.addColorStop(0.2, 'rgba(255, 0, 0, 0.1)');
    gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0)');

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#FF3A4C');
    gradientStroke.addColorStop(1, '#FFB767');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line', // also try bar or other graph types

        // The data for our dataset
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            // Information about the dataset
        datasets: [{
                label: "",
                backgroundColor: gradient,
                borderColor: gradientStroke,
                pointBackgroundColor: gradientStroke,
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 7,
                pointHoverBorderColor: gradientStroke,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 5,
                data: [200, 145, 145, 200, 230, 222, 200, 175, 150, 150, 200, 301],
                }]
        },

        // Configuration options
        options: {
            elements: {
                point:{
                    radius: 0
                }
            },
            layout: {
            padding: 10,
            },
            legend: {
                display:false,
            },
            title: {
                display: false,
            },
            tooltips: {
                yAlign: 'bottom',
                label:false,
                y:250,
                backgroundColor: '#F4F6FA',
                displayColors: false,
                bodyFontSize: 14,
                bodyFontColor: '#B6BABD',
                
                // intersect: true
                callbacks: {
                    title: function() {},
                    label: function(tooltipItems, data) { 
                        return tooltipItems.yLabel;
                    }
                }
                
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                    },
                    ticks: {
                        beginAtZero: true,
                        autoSkip: true,
                        maxTicksLimit: 5
                    },
                }],
                xAxes: [{
                    scaleLabel: {
                        display: false,
                    }
                }]
            }
        }
    });