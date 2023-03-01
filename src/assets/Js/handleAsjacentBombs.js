// Function to get the number of adjacent bombs to a cell
function adjacentBombs(row, col) {
  // Initialize variables to count the number of adjacent bombs
  let i, j, num_of_bombs;
  num_of_bombs = 0;

  // Loop through each adjacent cell and check if it contains a bomb
  for (i = -1; i < 2; i++) {
    for (j = -1; j < 2; j++) {
      if (components.bomb[row + i] && components.bomb[row + i][col + j]) {
        num_of_bombs++;
      }
    }
  }

  // Return the number of adjacent bombs
  return num_of_bombs;
}

// This function simulates a click on all adjacent cells that do not have a flag or have already been clicked.
function clickAdjacentBombs(row, col) {
  let i, j, cell;

  // Iterate over adjacent cells.
  for (i = -1; i < 2; i++) {
    for (j = -1; j < 2; j++) {
      // Skip the current cell.
      if (i === 0 && j === 0) {
        continue;
      }

      // Get the adjacent cell.
      cell = document.getElementById(cellID(row + i, col + j));

      // If the adjacent cell exists and has not been flagged or clicked, simulate a click on it.
      if (!!cell && !cell.clicked && !cell.flagged) {
        handleCellClick(cell, row + i, col + j);
      }
    }
  }
}

// This function performs a mass click on all adjacent cells if the number of adjacent flags matches the number of adjacent bombs.
function performMassClick(cell, row, col) {
  if (adjacentFlags(cell, row, col) === adjacentBombs(cell, row, col)) {
    clickAdjacentBombs(cell, row, col);
  }
}
