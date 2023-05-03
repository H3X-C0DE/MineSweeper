let flagMode = false;
// toggles the flag mode on and offfunction toggleFlagMode() {
function toggleFlagMode() {
  flagMode = !flagMode;
  const setFlagElement = document.getElementById("setFlag");
  if (flagMode) {
    setFlagElement.innerHTML = "Disable Flag";
    setFlagElement.style.backgroundColor = "#9e9e9e";
    setFlagElement.style.borderStyle = "inset";
    setFlagElement.style.borderColor = "#c0c0c0";
    setFlagElement.style.color = "#ffffff";
    console.log(flagMode);
  } else {
    setFlagElement.innerHTML = "Enable Flag";
    setFlagElement.style.backgroundColor = "";
    setFlagElement.style.borderStyle = "";
    setFlagElement.style.borderColor = "";
    setFlagElement.style.color = "";
    console.log(flagMode);
  }
}

// Function to handle click on a cell
function handleCellClick(cell, i, j) {
  if (!components.alive) {
    return;
  }

  if (cell.flagged || cell.clicked) {
    return;
  }
  // disables the click on the cell and replaces it with a flag
  if (flagMode === true) {
    cell.style.backgroundColor = "#c3c3c3";
    cell.innerHTML = "🚩";
    playFlag();
    return;
  }

  // Marking the cell as clicked
  cell.clicked = true;

  if (i > components.bomb.length || components.bomb[i][j]) {
    // If the clicked cell has a bomb,
    // show the bomb and play the explosion sound effect
    showBombs();
    cell.style.backgroundColor = "red";
    cell.textContent = "☠️";
    playDies();
    playExplosion();
    gameOver();
  } else {
    cell.style.backgroundColor = "lightGrey";
    playClicked();
    // If the clicked cell doesn't have a bomb,
    //show the number of adjacent bombs or clear the cell and adjacent cells
    num_of_bombs = adjacentBombs(i, j);
    if (num_of_bombs) {
      // If there are adjacent bombs, show the number of bombs as text
      cell.style.color = components.colors[num_of_bombs];
      cell.textContent = num_of_bombs;
    } else {
      // If there are no adjacent bombs,
      // clear the cell and the adjacent cells
      clickAdjacentBombs(i, j);
    }
    let winCon =
      components.num_of_cols * components.num_of_rows - components.num_of_bombs;
    // Increment the cell count and update the HTML element
    components.cellsClicked++;
    document.getElementById("count_up_points").textContent =
      String(components.cellsClicked).padStart(3, "0") + `/${winCon}`;

    if (components.cellsClicked >= winCon) {
      gameWon();
    } else {
      return;
    }
  }
}
