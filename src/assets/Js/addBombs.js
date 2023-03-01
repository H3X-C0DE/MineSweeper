// This sets the number of bombs in the grid by calling the addBombs function and passing

// This function takes in the number of rows and columns and calculates the number of bombs to add to the game board based on the selected difficulty level
function addBombs(num_of_rows, num_of_cols) {
  // Get the difficulty select element from the HTML document
  let difficultySelect = document.getElementById("difficulty-select");

  // Get the selected difficulty level from the difficulty select element
  let selectedDifficulty =
    difficultySelect.options[difficultySelect.selectedIndex].value;

  // Set the multiplier value based on the selected difficulty level
  let multiplier;
  if (selectedDifficulty === "easy") {
    multiplier = 0.18;
  } else if (selectedDifficulty === "normal") {
    multiplier = 0.23;
  } else if (selectedDifficulty === "hard") {
    multiplier = 0.27;
  }

  // Calculate the number of bombs to add based on the number of rows, columns, and multiplier
  let num_of_bombs = Math.ceil(num_of_rows * num_of_cols * multiplier);

  // Return the number of bombs to add to the game board
  return num_of_bombs;
}
// Wait for the window to load before executing the following code
window.addEventListener("load", () => {
  // Check if the user is on a mobile device or if the window width is less than 600 pixels
  let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
  if (isMobile || window.innerWidth < 600) {
    // Set the number of rows and columns for mobile devices
    components.num_of_rows = 20;
    components.num_of_cols = 11;

    addBombs();
  } else {
    components.num_of_rows = 12;
    components.num_of_cols = 26;

    addBombs();
  }
});

// Set the number of bombs on the game board based on the number of rows, columns, and selected difficulty level
components.num_of_bombs = addBombs(
  components.num_of_rows,
  components.num_of_cols
);

// This function starts the game by placing the bombs and creating the game board
function startGame() {
  // places the bombs on the game board
  components.bomb = placeBombs();
  // creates the game board and appends it to the HTML DOM
  document.getElementById("game-field").appendChild(createTable());
}

let bombsPlaced = [];

// This function generates an array that contains the positions of the bombs
function placeBombs() {
  let i,
    rows = [];

  // loops through the number of bombs specified in the components object and places them on the game board
  for (i = 0; i < components.num_of_bombs; i++) {
    placeSingleBomb(rows);
  }
  // returns the array containing the positions of the bombs
  return rows;
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
  // retrieves the column from the row based on the randomly selected column position
  col = row[ncol];

  // if the column is empty, places the bomb in the column; otherwise, call the function to place the bomb in a new position
  if (!col) {
    row[ncol] = true;
    // add the row and column indices to the bombsPlaced array
    bombsPlaced.push([nrow, ncol]);
    return;
  } else {
    placeSingleBomb(bombs);
  }
}
