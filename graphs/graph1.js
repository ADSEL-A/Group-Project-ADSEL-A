      // Prevent logarithmic errors in color calulcation
      $.get("https://adsei-node.mybluemix.net/getData/20cdbfe4d1e4463fc744abcaf9919d79", function(msg){
        console.log(msg.payload);
        var data=msg.payload;
      
      $.each(data, function () {
          this.value = (this.value < 1 ? 1 : this.value);
      });
  
      // Initiate the chart
      Highcharts.mapChart('container', {
          chart: {
              map: 'custom/world',
              width: 500,
              height:400
          },
  
          title: {
              text: 'FIFA Ranking'
          },
  
          mapNavigation: {
              enabled: true,
              enableDoubleClickZoomTo: true
          },
          credits:{
            enabled:false
          },
          colorAxis: {
              min: 1,
              max: 170,
              maxColor: '#EEEEFF',
              minColor: '#000022',
              // type: 'logarithmic'
          },
          navigation: {
            buttonOptions: {
                enabled: false
            }
        },
          series: [{
              data: data,
              joinBy: ['name', 'country_full'],
              name: 'Rank',
              states: {
                  hover: {
                      color: '#a4edba'
                  }
              },
              tooltip: {
  
              }
          }]
      });
  });
  