
/****

  To pull in data from a CSV file, we wrap our javascript inside a plot.d3.csv() function.

****/

var drawPlot = function(category) {

  Plotly.d3.csv('austin.csv', function(err, rows){






  /***
  Inside this function, the rows variable corresponds to the data in the CSV file. rows is an array of objects, each of which is represents a row of the CSV file. Each row object has properties corresponding to the columns in the CSV file.
  ***/






  /***
  This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
  ***/
  var unpack = function(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }


  /*if (category != "Race_subj") {
      var rows = rows.filter(function(item) {
        return item.category;
      })
    }*/


  var prettyX = [];

  if (category == 'Race_subj') {
     prettyX = 'Subject Race';
  } else if (category == 'Race_ofc') {
    prettyX = 'Officer Race';
  } else if (category == 'Gender_subj') {
    prettyX = 'Subject Gender';
  } else if (category == 'Gender_ofc') {
    prettyX = 'Officer Gender';
  } else if (category == 'Ofc_present') {
    prettyX = 'Number of Officers Present';
  } else if (category == 'Weapon_subj') {
    prettyX = 'Weapon of Subject';
  } else if (category == 'no_ofc_shooters') {
    prettyX = 'Number of Officers Who Shot';
  } else if (category == 'Age_ofc') {
    prettyX = 'Officer age';
  } else if (category == 'LE_Experience') {
    prettyX = 'Years of Law Enforcement Experience';
  } else if (category == 'Age_subj') {
    prettyX = 'Subject Age';
  } else if (category == 'Injuries_subj') {
    prettyX = 'Injuries';
  } else {
    prettyX = category;
  }




  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var trace1 = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, category),
    y: unpack(rows, 'Shots_ofc'),
    type: 'bar', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: '',
    marker: {
     color: '#F00'
    },
    line: {
      color: '#FFF'
    }
  };






  /*** Now that we've created our data objects using our CSV, we just create the visualization as we've done before: ***/

  // Create the data object as an array of our data series objects:
  var data = [trace1];

  // The layout object provides options for how our visualization will appear:
  var layout = {
    title:'Police Shootings in Austin',
    titlefont: {
      color: '#FFF',
      size: 40,
      family: 'IBM Plex Serif'
    },
    showlegend: false,
    hovermode: true, // if false, disables the hover text for the entire plot
    xaxis: {
     title: prettyX,
      color: '#FFF',
      titlefont: {
        size: 25,
        family: 'IBM Plex Serif',
      }
    },
    yaxis: {
     title: 'Shots fired',
      color: '#FFF',
      titlefont: {
       family: 'IBM Plex Serif',
       size: 30
    }
    },
    paper_bgcolor: '#222',
    plot_bgcolor: '#222'
  }

  var options = {
   displayModeBar: false, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('viz', data, layout, options);


})

}

drawPlot("Race_subj");

/*** Now we can setup our interactions using jQuery. ***/

$( document ).ready(function() {

  /*** Attach click event listener to links: ***/
  $('.buttons li').on('click', function() {
    var category = $(this).data('filter');
    drawPlot(category);
    $('.buttons li').removeClass('active');
    $(this).addClass('active');

    console.log (category);

  })

}) // document ready
