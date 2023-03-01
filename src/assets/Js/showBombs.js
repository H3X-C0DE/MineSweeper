function showBombs() {
  // Loop through each bomb that has been placed on the board
  for (let i = 0; i < bombsPlaced.length; i++) {
    // Get the row and column coordinates of the current bomb
    const [row, col] = bombsPlaced[i];

    // Get the cell element using the row and column coordinates
    const cell = document.getElementById(cellID(row, col));

    // Check if the cell contains a flag
    if (cell.textContent === "🚩") {
      // If the cell contains a flag, set the background color to green
      cell.style.backgroundColor = "#90EE90";
    } else {
      // If the cell does not contain a flag, show the bomb and set the background color to gray
      cell.textContent = "💣";
      cell.style.backgroundColor = "#D3D3D3";
    }
  }
}
