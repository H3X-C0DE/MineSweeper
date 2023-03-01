// This function adds event listeners to a given table cell for handling user interactions
function addCellListeners(td, i, j) {
  let cell = td;
  let rightClicked = false;
  td.addEventListener("mousedown", function (event) {
    if (!components.alive) {
      // if the game is over, don't do anything
      return;
    }

    components.mousewhiches += event.which; // add the mouse button to the list of clicked buttons

    if (event.which === 3) {
      // if the right mouse button is clicked, toggle the X flag
      rightClicked = true;
      if (cell.innerHTML === "🚩") {
        // if the cell already has a flag, remove it
        cell.innerHTML = "";
        playFlag();
      } else if (cell.innerHTML !== "" && !isNaN(cell.innerHTML)) {
        // if the cell contains a number, don't place a flag
        return;
        // if the cell is already opened don't do anything.
      } else if (this.clicked) {
        return;
      } else {
        // place the flag on the cell
        cell.innerHTML = "🚩";
        cell.style.backgroundColor = "#c3c3c3";
        playFlag();
      }

      event.preventDefault(); // prevent the default context menu from showing
      event.stopPropagation(); // stop the event from propagating to other elements
    } else {
      rightClicked = false;
      if (cell.flagged) {
        // if the cell is flagged, don't do anything
        return;
      }
      if (this.clicked) {
        // if the cell is already clicked, don't do anything
        return;
      }
      cell.style.backgroundColor = "#D3D3D3"; // change the cell's background color to light grey
    }
  });

  td.addEventListener("mouseup", function (event) {
    if (!components.alive) {
      // if the game is over, don't do anything
      return;
    }

    if (this.clicked && components.mousewhiches == 4) {
      // if both mouse buttons are clicked, perform a mass click on neighboring cells
      performMassClick(this, i, j);
    }

    components.mousewhiches = 0; // reset the list of clicked buttons

    if (rightClicked) {
      rightClicked = false;
      return false;
    } else {
      // if the left mouse button is clicked
      handleCellClick(this, i, j); // handle the click on the current cell
    }
  });

  // This prevents the default context menu from showing when the right mouse button is clicked
  td.oncontextmenu = function () {
    return false;
  };
}
