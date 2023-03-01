// This function returns a unique ID for a cell based on its row and column index
function cellID(i, j) {
  return "cell-" + i + "-" + j;
}

// This function creates the game board table and adds event listeners to each cell
function createTable() {
  let table, row, td, i, j;
  table = document.createElement("table"); // creates a new table element

  // loops through each row and column of the game board to create the table cells
  for (i = 0; i < components.num_of_rows; i++) {
    row = document.createElement("tr"); // creates a new row element
    for (j = 0; j < components.num_of_cols; j++) {
      td = document.createElement("td"); // creates a new table cell element
      td.id = cellID(i, j); // assigns a unique ID to the table cell based on its row and column index
      row.appendChild(td); // adds the table cell to the current row
      addCellListeners(td, i, j); // adds event listeners to the table cell
    }
    table.appendChild(row); // adds the current row to the table
  }
  return table; // returns the complete game board table
}
