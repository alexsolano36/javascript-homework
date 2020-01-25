// from data.js
var tableData = data;

// Button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime == inputValue);

    console.log(filteredData);

    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    filteredData.forEach(day => {
        trow = tbody.append("tr");
        for (var key in day){
            trow.append("td").text(day[key]);
        }
    })
})

function buildTable(Date, City, State, Country, Shape, Duration, Comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    trow = tbody.append("tr");
    filteredData.forEach(day => {
        for (var key in day){
            trow.append("td").text(day[key]);
        };
    });

};
// YOUR CODE HERE!
