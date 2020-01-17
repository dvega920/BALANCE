// Chart 3rd party API 
// https://www.highcharts.com/demo/chart-update
document.addEventListener('DOMContentLoaded', function () {

    axios.get("/api/moods")
        .then((response) => {
            var chart = Highcharts.chart('chart', {

                title: {
                    text: 'Your Mood Chart'
                },

                subtitle: {
                    text: 'Your Year'
                },

                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },

                series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: response.data,
                    showInLegend: false
                }]
                // High charts change y-values
            });
        });


    // Emotions and Activities 3rd party API 
    //  https://www.highcharts.com/demo/pie-basic



    axios.get("/api/activity")
        .then((response) => {
            // Start pie
            Highcharts.chart('pie', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Your Activities'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Activities',
                    colorByPoint: true,
                    // data: response.data,
                    data: [{
                        name: 'Biking',
                        y: 61.41,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Sleeping',
                        y: 11.84
                    }, {
                        name: 'Studying',
                        y: 10.85
                    }, {
                        name: 'Online',
                        y: 4.67
                    }, {
                        name: 'Friends',
                        y: 4.18
                    }, {
                        name: 'Drinking',
                        y: 1.64
                    }, {
                        name: 'Love',
                        y: 1.6
                    }, {
                        name: 'Gaming',
                        y: 1.2
                    }, {
                        name: 'Reading',
                        y: 2.61
                    }, {
                        name: 'Eating',
                        y: 11.84
                    }, {
                        name: 'Shopping',
                        y: 10.85
                    }, {
                        name: 'Pets',
                        y: 4.67
                    }, {
                        name: 'Traveling',
                        y: 4.18
                    }, {
                        name: 'Driving',
                        y: 2.61
                    }, {
                        name: 'Working',
                        y: 11.84
                    }, {
                        name: 'Exercising',
                        y: 10.85
                    }, {
                        name: 'baby sitting',
                        y: 4.67
                    }, {
                        name: 'Church',
                        y: 4.18
                    }, {
                    }]
                }]
            });
        });
    // end pie


});



