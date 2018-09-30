$(function() {
    // Set up the chart
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 13,
          depth: 50,
          viewDistance: 25
        }
      },title:{text:"Number of Crimes in Australia"},
      plotOptions: {
        column: {
          allowPointSelect: true,
          borderWidth: 2,
          depth: 25,
          point: {
            events: {
                select:function() {
                var p = this;
                setTimeout(function() { 
                p.graphic.attr({
                    'stroke': 'red',
                  'stroke-width': 2
                })
                },1);
              }
            }
          },
          states: {
            select: {
              color: "black",
              borderColor: "red"
            }
          }
        }
      },
      credits:{
        enabled:false
      },navigation: {
        buttonOptions: {
            enabled: false
        }
    },xAxis: {
          categories: [2011,2012,2013,2014,2015,2016,2017],
          labels: {
              skew3d: true,
              style: {
                  fontSize: '16px'
              }
          }
      },
      series: [{
      name:'Major Crimes',
         data: [87115	,82461	,76257,	68027	,64041	,62703,58000]
      }]
    });
    
function showValues() {
  $('#alpha-value').html(chart.options.chart.options3d.alpha);
  $('#beta-value').html(chart.options.chart.options3d.beta);
  $('#depth-value').html(chart.options.chart.options3d.depth);
}

// Activate the sliders
$('#sliders input').on('input change', function () {
  chart.options.chart.options3d[this.id] = parseFloat(this.value);
  showValues();
  chart.redraw(false);
});

showValues();
  });
  
  

