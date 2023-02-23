let components = {
  num_of_rows: 12, //12
  num_of_cols: 24, //24
  num_of_bombs: 55, //55
  bomb: "☠️",
  cellsClicked: 0,
  alive: true,
  colors: {
    1: "#0000FF",
    2: "#008000",
    3: "#FF0000",
    4: "#800080",
    5: "#800000",
    6: "#FF1493",
    7: "#008080",
    8: "#000000",
  },
};
// This code sets the number of rows and columns of a grid depending on the width of the window.
if (window.innerWidth < 400) {
  // If the window width is less than 400, set 24 rows and 10 columns.
  components.num_of_rows = 24;
  components.num_of_cols = 10;

  addBombs();
} else if (window.innerWidth < 700) {
  // If the window width is less than 700 but greater than or equal to 400, set 12 rows and 17 columns.
  components.num_of_rows = 12;
  components.num_of_cols = 17;
  addBombs();
} else {
  components.num_of_rows = 12;
  components.num_of_cols = 24;
  addBombs();
}
// This function calculates the number of bombs in the grid based on the number of rows and columns.
function addBombs(num_of_rows, num_of_cols) {
  let num_of_bombs = Math.ceil(num_of_rows * num_of_cols * 0.23);
  return num_of_bombs;
}

components.num_of_bombs = addBombs(
  components.num_of_rows,
  components.num_of_cols
);
// This sets the number of bombs in the grid by calling the addBombs function and passing
function addBombs(num_of_rows, num_of_cols) {
  let num_of_bombs = Math.ceil(num_of_rows * num_of_cols * 0.23);
  return num_of_bombs;
}
// console.log(components);
// console.log(components.num_of_bombs);

// This function starts the game by placing the bombs and creating the game board
function startGame() {
  components.bomb = placeBombs(); // places the bombs on the game board
  document.getElementById("field").appendChild(createTable()); // creates the game board and appends it to the HTML DOM
}

// This function generates an array that contains the positions of the bombs
function placeBombs() {
  let i,
    rows = []; // creates an empty array to hold the positions of the bombs

  // loops through the number of bombs specified in the components object and places them on the game board
  for (i = 0; i < components.num_of_bombs; i++) {
    placeSingleBomb(rows);
  }
  return rows; // returns the array containing the positions of the bombs
}

// This function places a single bomb on the game board
function placeSingleBomb(bombs) {
  let nrow, ncol, row, col;
  nrow = Math.floor(Math.random() * components.num_of_rows); // randomly selects a row position for the bomb
  ncol = Math.floor(Math.random() * components.num_of_cols); // randomly selects a column position for the bomb
  row = bombs[nrow]; // retrieves the row from the bombs array based on the randomly selected row position

  // if the row is empty, creates a new row and adds it to the bombs array
  if (!row) {
    row = [];
    bombs[nrow] = row;
  }

  col = row[ncol]; // retrieves the column from the row based on the randomly selected column position

  // if the column is empty, places the bomb in the column; otherwise, recursively calls the function to place the bomb in a new position
  if (!col) {
    row[ncol] = true;
    return;
  } else {
    placeSingleBomb(bombs);
  }
}
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

// This function adds event listeners to a given table cell for handling user interactions
function addCellListeners(td, i, j) {
  let cell = td;
  let rightClicked = false;
  td.addEventListener("mousedown", function (event) {
    if (!components.alive) {
      // if the game is over, don't do anything
      // document.getElementById("status").textContent = "😵";
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
      cell.style.backgroundColor = "lightGrey"; // change the cell's background color to light grey
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
/////////////////////////////////////////////////////AUDIO FILES/////////////////////////////////////////////

// Creating a new Audio object sound effects
let explosion = new Audio("./src/assets/sound/explosion.mp3");
// let dies = new Audio("./src/assets/sound/dies.mp3");
let dies2 = new Audio("./src/assets/sound/ragdoll.mp3");
let clicked = new Audio("./src/assets/sound/detonate.mp3");
let flag = new Audio("./src/assets/sound/pop.mp3");
let victory = new Audio("./src/assets/sound/kids-yeyye.mp3");
// Function to play the sound effects
function playExplosion() {
  explosion.play();
}
function playDies() {
  dies2.play();
}
function playClicked() {
  clicked.play();
}
// this is called up with RightClick = 🚩
function playFlag() {
  flag.play();
}
function playVictory() {
  victory.play();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add event listener for mousedown event
document.addEventListener("mousedown", function () {
  // If the game is still in progress, update the status element to show a scared face emoji
  if (components.alive) {
    document.getElementById("status").textContent = "😨";
  }
});

// Add event listener for mouseup event
document.addEventListener("mouseup", function () {
  // If the game is still in progress, update the status element to show a happy face emoji
  if (components.alive) {
    document.getElementById("status").textContent = "😃";
  }
});

function changeStatusToDead() {
  const statusSpan = document.getElementById("status");
  statusSpan.textContent = "😵";
}
function changeStatusToVictory() {
  const statusSpan = document.getElementById("status");
  statusSpan.textContent = "🥳";
}

// Function to handle click on a cell
function handleCellClick(cell, i, j) {
  if (!components.alive) {
    return;
  }

  if (cell.flagged || cell.clicked) {
    return;
  }

  // Marking the cell as clicked
  cell.clicked = true;

  if (components.bomb[i][j]) {
    // If the clicked cell has a bomb,
    // show the bomb and play the explosion sound effect
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

// Function to get the number of adjacent bombs to a cell
function adjacentBombs(row, col) {
  let i, j, num_of_bombs;
  num_of_bombs = 0;

  for (i = -1; i < 2; i++) {
    for (j = -1; j < 2; j++) {
      if (components.bomb[row + i] && components.bomb[row + i][col + j]) {
        num_of_bombs++;
      }
    }
  }
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

// This function sets the game status to "lost" and displays the "lost" message.
function gameOver() {
  changeStatusToDead();
  components.alive = false;
  document.getElementById("lost").style.display = "block";
  // document.getElementById("game_over_screen").style.display = "block";
}
function gameWon() {
  changeStatusToVictory();
  playVictory();
  components.alive = false;
  document.getElementById("victory").style.display = "block";
  console.log("victory");
}
// This function reloads the page.
function reload() {
  window.location.reload();
}
function exit() {
  window.close();
}
// When the page loads, hide the "lost" message and start the game.
window.addEventListener("load", function () {
  document.getElementById("lost").style.display = "none";
  // document.getElementById("game_over_screen").style.display = "none";
  startGame();
});

////////////////////////TIMER////////////////////////
let timerVariable;
let totalSeconds = 0;
let timerStarted = false;

document.getElementById("box").addEventListener("mousedown", function (event) {
  if (!timerStarted && components.alive) {
    timerVariable = setInterval(countUpTimer, 1000);
    timerStarted = true;
  }
});

function countUpTimer() {
  ++totalSeconds;
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  let seconds = totalSeconds - (hour * 3600 + minute * 60);

  // Add leading zeros
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("count_up_timer").innerHTML =
    hour + ":" + minute + ":" + seconds;

  if (!components.alive) {
    stopTimer();
  }
  function stopTimer() {
    clearInterval(timerVariable);
  }
}

////////////////////////TIMER-END////////////////////////

// ending screen countdown ////
// let timeLeft = 15;
// const timer = setInterval(function () {
//   timeLeft--;
//   document.getElementById("timer").textContent = timeLeft;
//   if (timeLeft === 0 && !components.alive) {
//     clearInterval(timer);
//     // window.close();
//     console.log(shutdown);
//   }
// }, 1000);
