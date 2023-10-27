// // document.addEventListener("DOMContentLoaded", function () {
// //   var data = [{
// //       x: ['Apples', 'Bananas', 'Cherries'],
// //       y: [10, 20, 5],
// //       type: 'bar'03++++
// //   }];

// //   var layout = {
// //       title: 'Bar Graph Example'
// //   };

// //   var config = {
// //       displayModeBar: false // Set this to false to hide the toolbar
// //   };

// //   Plotly.newPlot('bar-graph', data, layout, config);
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   fetch('data.csv')
// //       .then(response => response.text())
// //       .then(csvData => {
// //           var parsedData = Papa.parse(csvData, { header: true });

// //           // Count indents per company
// //           var companyCounts = {};
// //           parsedData.data.forEach(row => {
// //               var companyName = row['Company Name'];
// //               companyCounts[companyName] = (companyCounts[companyName] || 0) + 1;
// //           });

// //           // Prepare data for Plotly.js bar chart
// //           var data = [{
// //               x: Object.keys(companyCounts),
// //               y: Object.values(companyCounts),
// //               type: 'bar'
// //           }];

// //           var layout = {
// //               title: 'Indents per Company'
// //           };

// //           Plotly.newPlot('bar-graph', data, layout);
// //       });
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   // Fetch the CSV file using the Fetch API
// //   fetch('data.csv')
// //       .then(response => response.text())
// //       .then(csvData => {
// //           // Parse CSV data using PapaParse
// //           var parsedData = Papa.parse(csvData, { header: true });

// //           // Process the parsed data to count indents per company
// //           var companyIndentCount = {};
// //           parsedData.data.forEach(row => {
// //               var companyName = row['Company Name'];
// //               if (companyIndentCount[companyName]) {
// //                   companyIndentCount[companyName]++;
// //               } else {
// //                   companyIndentCount[companyName] = 1;
// //               }
// //           });

// //           // Create data for the bar graph
// //           var data = [{
// //               x: Object.keys(companyIndentCount),
// //               y: Object.values(companyIndentCount),
// //               type: 'bar'
// //           }];

// //           // Create layout for the bar graph
// //           var layout = {
// //               title: 'Indent Count by Company',
// //               xaxis: {
// //                   title: 'Company Name'
// //               },
// //               yaxis: {
// //                   title: 'Indent Count'
// //               }
// //           };

// //           // Create the bar graph using Plotly.js
// //           Plotly.newPlot('bar-graph', data, layout);
// //       })
// //       .catch(error => {
// //           console.error('Error fetching CSV data:', error);
// //       });
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   // Fetch the CSV file using the Fetch API
// //   fetch('data.csv')
// //       .then(response => response.text())
// //       .then(csvData => {
// //           // Parse CSV data using PapaParse
// //           var parsedData = Papa.parse(csvData, { header: true });

// //           // Process the parsed data to count indents per company
// //           var companyIndentCount = {};
// //           parsedData.data.forEach(row => {
// //               var companyName = row['Company Name'];
// //               if (companyName) {
// //                   if (companyIndentCount[companyName]) {
// //                       companyIndentCount[companyName]++;
// //                   } else {
// //                       companyIndentCount[companyName] = 1;
// //                   }
// //               }
// //           });

// //           // Create data for the bar graph
// //           var data = [{
// //               x: Object.keys(companyIndentCount),
// //               y: Object.values(companyIndentCount),
// //               type: 'bar'
// //           }];

// //           // Create layout for the bar graph
// //           var layout = {
// //               title: 'Indent Count by Company',
// //               xaxis: {
// //                   title: 'Company Name'
// //               },
// //               yaxis: {
// //                   title: 'Indent Count'
// //               }
// //           };

// //           // Create the bar graph using Plotly.js
// //           Plotly.newPlot('bar-graph', data, layout);
// //       })
// //       .catch(error => {
// //           console.error('Error fetching CSV data:', error);
// //       });
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   var map = new MapmyIndia.Map("map", { center: [28.4595, 77.0266], zoomControl: true });

// //   // Define a tile layer source
// //   var tileLayerSource = new MapmyIndia.TileLayerSource({ apikey: 'de559e0d55b56823b09ddbf72cddabc2' });

// //   // Create a tile layer with the source
// //   var tileLayer = new MapmyIndia.Layer.Tile({ source: tileLayerSource });

// //   // Add the tile layer to the map
// //   map.addLayer(tileLayer);
// // });

// // Fetch the CSV file using PapaParse
// // Papa.parse('data.csv', {
// //     header: true,
// //     dynamicTyping: true,
// //     download: true,
// //     complete: function(results) {
// //         // Process the parsed data to create a stacked bar chart
// //         const data = [];

// //         // Create a dictionary to hold quantities by product and date
// //         const productQuantities = {};

// //         results.data.forEach(row => {
// //             const date = row.Date;
// //             const product = row.Product;
// //             const quantity = row.Quantity;

// //             if (!productQuantities[product]) {
// //                 productQuantities[product] = {
// //                     x: [],
// //                     y: [],
// //                     type: 'bar',
// //                     name: product,
// //                 };
// //             }

// //             // Convert the date to a readable format
// //             const dateParts = date.split(",");
// //             const month = dateParts[0];
// //             const day = dateParts[1].trim();
// //             const year = dateParts[2].trim();
// //             const formattedDate = `${month} ${day}, ${year}`;

// //             productQuantities[product].x.push(formattedDate);
// //             productQuantities[product].y.push(quantity);
// //         });

// //         // Add each product's data to the chart
// //         for (const product in productQuantities) {
// //             data.push(productQuantities[product]);
// //         }

// //         const layout = {
// //             barmode: 'stack',
// //             title: 'Quantity of Products by Date',
// //             xaxis: {
// //                 title: 'Date',
// //                 tickangle: -45,
// //             },
// //             yaxis: {
// //                 title: 'Quantity',
// //             },
// //         };

// //         // Create the stacked bar chart
// //         Plotly.newPlot('stacked-bar-chart', data, layout);
// //     },
// // });

// // const chartContainer = document.getElementById('stacked-bar-chart');

// // // Sample data
// // const data = [
// //   {
// //     x: ["January 1, 2022", "January 2, 2022", "January 3, 2022"],
// //     y: [100, 150, 200],
// //     type: 'bar',
// //     name: 'Product A',
// //   },
// //   {
// //     x: ["January 1, 2022", "January 2, 2022", "January 3, 2022"],
// //     y: [50, 75, 100],
// //     type: 'bar',
// //     name: 'Product B',
// //   },
// //   {
// //     x: ["January 1, 2022", "January 2, 2022", "January 3, 2022"],
// //     y: [25, 35, 45],
// //     type: 'bar',
// //     name: 'Product C',
// //   },
// // ];

// // const layout = {
// //   barmode: 'stack',
// //   title: 'Quantity of Products Sold by Date',
// //   xaxis: {
// //     title: 'Date',
// //     tickangle: -45,
// //   },
// //   yaxis: {
// //     title: 'Quantity',
// //   },
// // };

// // // Create the stacked bar chart
// // Plotly.newPlot(chartContainer, data, layout);
// // Sample data for the stacked bar chart
// // const trace1 = {
// //     x: ["Category 1", "Category 2", "Category 3", "Category 4"],
// //     y: [10, 15, 13, 17],
// //     type: "bar",
// //     name: "Series 1",
// //   };

// //   const trace2 = {
// //     x: ["Category 1", "Category 2", "Category 3", "Category 4"],
// //     y: [5, 8, 6, 9],
// //     type: "bar",
// //     name: "Series 2",
// //   };

// //   const trace3 = {
// //     x: ["Category 1", "Category 2", "Category 3", "Category 4"],
// //     y: [7, 11, 9, 13],
// //     type: "bar",
// //     name: "Series 3",
// //   };

// //   const data = [trace1, trace2, trace3];

// //   const layout = {
// //     title: "Stacked Bar Chart Example",
// //     barmode: "stack", // Stacked bar chart
// //     xaxis: {
// //       title: "Categories",
// //     },
// //     yaxis: {
// //       title: "Values",
// //     },
// //   };

// //   // Create the stacked bar chart
// //   Plotly.newPlot("stacked-bar-chart", data, layout);

// // Sample data
// fetch('data.csv')
// .then(response => response.text())
// .then(csv => {
//     const data = parseCSV(csv);

//     // Continue with chart creation using the fetched data
//     createGanttChart(data);
// })
// .catch(error => console.error('Error fetching data:', error));

// // Function to parse CSV data into an array of objects
// function parseCSV(csv) {
// const lines = csv.split('\n');
// const headers = lines[0].split(',');
// const data = [];

// for (let i = 1; i < lines.length; i++) {
//     const currentLine = lines[i].split(',');
//     const entry = {};

//     for (let j = 0; j < headers.length; j++) {
//         entry[headers[j].trim()] = currentLine[j].trim();
//     }

//     data.push(entry);
// }

// return data;
// }

// // Function to create the Gantt chart
// function createGanttChart(data) {
// // Process the data for the chart
// const chartData = {
//     labels: data.map(item => item['Indent No.']),
//     datasets: [{
//         data: data.map(item => ({
//             x: item.Date,
//             y: item.Date, // For simplicity, using the same date for both start and end
//             status: item['Indent Status']
//         })),
//         borderColor: "blue",
//         borderWidth: 1,
//         backgroundColor: data.map(item => {
//             if (item['Indent Status'] === "Executed") return "green";
//             if (item['Indent Status'] === "Cancelled") return "red";
//             if (item['Indent Status'] === "On Hold") return "yellow";
//             if (item['Indent Status'] === "In Progress") return "orange";
//         }),
//     }]
// };

// const ctx = document.getElementById("ganttChart").getContext("2d");

// const options = {
//     scales: {
//         x: {
//             type: "time",
//             time: {
//                 unit: "day",
//                 displayFormats: {
//                     day: "MMM D, YYYY"
//                 }
//             },
//             title: {
//                 display: true,
//                 text: "Timeline"
//             }
//         },
//         y: {
//             title: {
//                 display: true,
//                 text: "Indents"
//             }
//         }
//     }
// };

// // Create the Gantt chart
// const ganttChart = new Chart(ctx, {
//     type: "bar",
//     data: chartData,
//     options: options
// });
// }

// script.js
// Load the CSV data using the PapaParse library (you may need to include it)
// Load the CSV data using the PapaParse library (you may need to include it)
Papa.parse("data.csv", {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
        createBarChart(results.data);
    }
});

// Function to create the bar chart using Plotly
function createBarChart(data) {
    const chartData = {};

    // Group the data by Company Name and Indent Status
    data.forEach(item => {
        const companyName = item["Company Name"];
        const indentStatus = item["Indent Status"];

        if (!chartData[companyName]) {
            chartData[companyName] = {};
        }

        if (!chartData[companyName][indentStatus]) {
            chartData[companyName][indentStatus] = 0;
        }

        chartData[companyName][indentStatus]++;
    });

    // Prepare data for the chart
    const traceData = [];

    // Extract unique Indent Status values
    const indentStatusList = Array.from(
        new Set(data.map(item => item["Indent Status"]))
    );

    // Extract unique Company Names
    const companyNames = Object.keys(chartData);

    // Create traces for each Company Name
    companyNames.forEach(companyName => {
        const dataPoints = [];

        indentStatusList.forEach(status => {
            dataPoints.push(chartData[companyName][status] || 0);
        });

        traceData.push({
            x: indentStatusList,
            y: dataPoints,
            type: 'bar',
            name: companyName,
        });
    });

    // Define the layout for the chart
    const layout = {
        barmode: 'group', // You can use 'group' for grouped bars
        xaxis: {
            title: 'Indent Status'
        },
        yaxis: {
            title: 'Count'
        },
        title: 'Indent Status by Company Name'
    };

    // Create the bar chart using Plotly
    Plotly.newPlot('barChart', traceData, layout);
}

