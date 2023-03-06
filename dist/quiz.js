var table = document.getElementById("employee-table");
var rows = table.rows;
var headers = document.getElementsByTagName("th");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function() {
    var col = this.cellIndex;
    var sortOrder = this.classList.toggle("sort-asc") ? 1 : -1;
    var rowsArray = Array.prototype.slice.call(rows, 1);
    rowsArray.sort(function(a, b) {
      var aVal = a.cells[col].textContent.trim();
      var bVal = b.cells[col].textContent.trim();
      if (aVal == bVal) {
        return 0;
      }
      if (aVal > bVal) {
        return 1 * sortOrder;
      }
      return -1 * sortOrder;
    });
    for (var j = 0; j < rowsArray.length; j++) {
      table.tBodies[0].appendChild(rowsArray[j]);
    }
  });
}
