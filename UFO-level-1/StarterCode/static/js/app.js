// from data.js
var tableData = data;

var table = d3.select('table');
table.attr('class', 'table table-striped');
var tbody = d3.select('tbody');

tableData.forEach(function(UFOData) {
    console.log(UFOData);
    var row = tbody.append('tr');

    Object.entries(UFOData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

var button = d3.select('#filter-btn');

button.on("click", function() {
  var inputElement = d3.select('#datetime');
  var inputValue = inputElement.property('value');
  console.log(inputValue);
  
  $('#myTableId').empty();

  if (inputValue === "") {
    
    tableData.forEach(function(UFOData) {
      console.log(UFOData);
      var row = tbody.append('tr');

      Object.entries(UFOData).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append('td');
          cell.text(value);
      });
    })
    }
    else {
      var filteredData = tableData.filter(occurrence => occurrence.datetime === inputValue);
      console.log(filteredData);

      // $('#myTableId').empty();

      filteredData.forEach(function(UFOData) {
        console.log(UFOData);
        var row = tbody.append('tr');

        Object.entries(UFOData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
      });
    }
  
});


