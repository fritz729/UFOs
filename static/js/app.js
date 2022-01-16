// Import the data from data.js
const tableData = data;

//Ref the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
}

data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;
    // if-statement
    if (date){
      filterData = filterData.filter(row => row.datetime === date);
    buildTable(filterData);
    };
    d3.selectAll("#filter-btn").on("click", handeClick);
}   buildTable(tableData);