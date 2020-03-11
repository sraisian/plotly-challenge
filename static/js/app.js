//python -m http.server inside file location 
// or use live server
//use D3 library to read in samples.json

//resources: Ex 4,6,8,9 in Saturday (Day 2)
//ex 6,7 in Day 3 folder

    
//horizontal bar chart with horizonatl menu to
//display the top 10 OTUs found in indiv
    //use sample_values as values 
    //use otu_ids as labels
    //use otu_labels as hovertext
d3.json("data/samples.json").then((importedData) => {
    console.log(importedData); // Fetch the JSON data and console log it
    //var data = [importedData];
    // Sort the data array using value
    data.sort(function(a, b) {
      return parseInt(b.samples.otu_ids) - parseInt(a.samples.otu_ids);
    });
    // Slice the first 10 objects for plotting
    data = data.slice(0, 10);
    // Reverse the array due to Plotly's defaults
    data = data.reverse();
  
    // Trace1 for the Data
    var trace1 = {
      x: data.map(row => row.sample_values),
      y: data.map(row => row.otu_ids),
      text: data.map(row => row.otu_labels),
      name: "Top OTUs",
      type: "bar",
      orientation: "h"
    };
  
    // data
    var chartData = [trace1];
  
    // Apply the group bar mode to the layout
    var layout = {
      title: "Top 10 OTUs by Individual",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", chartData, layout);
  });

//bubble chart to display each sample
    //otu_ids as x vals
    //sample_values for y vals and marker size
    //otu_ids for marker color
    //otu_lables for text values

d3.json("data/samples.json").then((importedData) => {
    console.log(importedData); // Fetch the JSON data and console log it
    var data = [importedData];

    // Trace1 for the Data
    var trace1 = {
      x: data.map(row => row.otu_ids),
      y: data.map(row => row.sample_values),
      text: data.map(row => row.otu_labels),
      name: "Top OTUs",
      type: "bubble",
      //orientation: "h"
    };
  
    // data
    var chartData = [trace1];
  
    // Apply the group bar mode to the layout
    var layout = {
      title: "Sample Data",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bubble", chartData, layout);
  });


//Display sample metadata (indiv demo info)

//disply key-value pair from metadata JSON somewhere




//update all plots if new sample selected;


// Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");

//   // Initialize x and y arrays
//   var x = [];
//   var y = [];

//   if (dataset === 'dataset1') {
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 4, 8, 16];
//   }

//   if (dataset === 'dataset2') {
//     x = [10, 20, 30, 40, 50];
//     y = [1, 10, 100, 1000, 10000];
//   }

//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
// }

// init();
