/********************************* map ***********************************/



Plotly.d3.csv('austin.csv', function(err, rows){

      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }


      var data = [{
          type: 'scattermapbox',
          lat: unpack(rows, 'Latitude'),
          lon: unpack(rows, 'Longitude'),
          text: unpack(rows, 'Offense_#'),
          marker: {
            color: '#F00'
          }
      }];

      var layout = {
       title: 'Officer Involved Shootings 2000-2014',
       titlefont: {
      color: '#FFF',
      size: 20,
      family: 'IBM Plex Serif'
       },
        dragmode: 'zoom',
        mapbox: {
          center: { // Sets the center of the map.
            lat: 30.2872,
            lon: -97.5431
          },
          zoom: 9, // Sets the zoom level.
          style: 'dark' // These are mapbox styles. Options include light, dark, satellite
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#222',
        plot_bgcolor: '#FFF',
        showlegend: false
      };

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiZGNhcnRlciIsImEiOiJjamZiZXczdnozNXc2MnFwNDNvazdic3d5In0._SFNB_RTylq_bYxJbqVdiQ' // Get your own Mapbox access token by registering at mapbox.com
      });

      Plotly.plot('viz2', data, layout);
});


/*** Now we can setup our interactions using jQuery. ***/


 
