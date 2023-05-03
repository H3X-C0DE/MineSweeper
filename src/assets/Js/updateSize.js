function updateSize() {
  // Get the input value for the size of the game field
  let input = document.getElementById("sizeInput").value;
  let difficultySelect = document.getElementById("difficulty-select");
  let selectedDifficulty =
    difficultySelect.options[difficultySelect.selectedIndex].value;

  // Calculate the number of columns and rows based on the input value
  let num_of_cols = Math.ceil((Math.sqrt((input * 6) / 4) * 6) / 4);
  let num_of_rows = Math.ceil((num_of_cols * 3) / 7);

  // Check if the input value is valid and handle accordingly
  switch (true) {
    case input >= 999:
      alert(`
      ⣿⣿⣿⣿⣿⣿⠿⢋⣥⣴⣶⣶⣶⣬⣙⠻⠟⣋⣭⣭⣭⣭⡙⠻⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⡿⢋⣴⣿⣿⠿⢟⣛⣛⣛⠿⢷⡹⣿⣿⣿⣿⣿⣿⣆⠹⣿⣿⣿⣿
      ⣿⣿⣿⡿⢁⣾⣿⣿⣴⣿⣿⣿⣿⠿⠿⠷⠥⠱⣶⣶⣶⣶⡶⠮⠤⣌⡙⢿⣿
      ⣿⡿⢛⡁⣾⣿⣿⣿⡿⢟⡫⢕⣪⡭⠥⢭⣭⣉⡂⣉⡒⣤⡭⡉⠩⣥⣰⠂⠹
      ⡟⢠⣿⣱⣿⣿⣿⣏⣛⢲⣾⣿⠃⠄⠐⠈⣿⣿⣿⣿⣿⣿⠄⠁⠃⢸⣿⣿⡧
      ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣇⣊⠙⠳⠤⠤⠾⣟⠛⠍⣹⣛⣛⣢⣀⣠⣛⡯⢉⣰
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡶⠶⢒⣠⣼⣿⣿⣛⠻⠛⢛⣛⠉⣴⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⡿⢛⡛⢿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡈⢿⣿
      ⣿⣿⣿⣿⣿⣿⣿⠸⣿⡻⢷⣍⣛⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢇⡘⣿
      ⣿⣿⣿⣿⣿⣿⣿⣷⣝⠻⠶⣬⣍⣛⣛⠓⠶⠶⠶⠤⠬⠭⠤⠶⠶⠞⠛⣡⣿
      ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣬⣭⣍⣙⣛⣛⣛⠛⠛⠛⠿⠿⠿⠛⣠⣿⣿
      ⣦⣈⠉⢛⠻⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⣁⣴⣾⣿⣿⣿⣿
      ⣿⣿⣿⣶⣮⣭⣁⣒⣒⣒⠂⠠⠬⠭⠭⠭⢀⣀⣠⣄⡘⠿⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡈⢿⣿⣿⣿⣿⣿

      We both know you won't do this on max cell amount.
      And having it on ${selectedDifficulty} difficulty isn't gonna help you.
      Only someone with to much time on their hands
      would even consider doing this..
          `);
      break;
    case input <= 10 && input >= 1:
      alert(`
          ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣉⡥⠶⢶⣿⣿⣿⣿⣷⣆⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿⣿⡿⢡⡞⠁⠀⠀⠤⠈⠿⠿⠿⠿⣿⠀⢻⣦⡈⠻⣿⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿⣿⡇⠘⡁⠀⢀⣀⣀⣀⣈⣁⣐⡒⠢⢤⡈⠛⢿⡄⠻⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠉⠐⠄⡈⢀⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿⣿⠇⢠⣿⣿⣿⣿⡿⢿⣿⣿⣿⠁⢈⣿⡄⠀⢀⣀⠸⣿⣿⣿⣿
          ⣿⣿⣿⣿⡿⠟⣡⣶⣶⣬⣭⣥⣴⠀⣾⣿⣿⣿⣶⣾⣿⣧⠀⣼⣿⣷⣌⡻⢿⣿
          ⣿⣿⠟⣋⣴⣾⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⣿⣿⣿⡿⢸⣿⣿⣿⣿⣷⠄⢻
          ⡏⠰⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢂⣭⣿⣿⣿⣿⣿⠇⠘⠛⠛⢉⣉⣠⣴⣾
          ⣿⣷⣦⣬⣍⣉⣉⣛⣛⣉⠉⣤⣶⣾⣿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡘⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿
          ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿

          So you need something this small to win.
          You sure baby-mode isn't not to hard for you?`);
      break;
    case input <= 0:
      alert(`
        ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⠠⠒⠄⣰⣾⣿⣿⣿⠉⠐⠠⠤⢄⠄⠄⠄⠄⠄⠄
        ⠄⠄⠄⠄⠄⠄⣠⠔⠊⡽⠄⠄⠄⠄⢸⣿⣿⣿⣿⠃⠄⠄⠄⠄⣷⣦⡄⠄⠄⠄
        ⠄⠄⠄⠄⡤⠊⠄⠄⠄⡇⠄⠄⠄⠄⠻⣿⣿⣿⣿⡇⠄⠄⠄⠄⣹⣿⣿⡀⠄⠄
        ⠄⠄⣠⣾⡦⠄⠄⠄⠄⢳⠄⠄⠄⠄⣰⣿⣿⣿⡋⠄⠄⠄⠄⠄⠹⣿⣿⡃⠄⠄
        ⠄⢀⣹⣿⣷⠄⠄⠄⠄⠘⢆⣀⠄⠄⢋⣭⣭⠭⣶⣬⡛⢋⣴⠟⣣⣬⣍⠃⠄⠄
        ⠄⣿⣿⣿⣿⣆⡀⠄⠄⠄⣀⣨⣭⣶⢋⣩⣶⣿⣶⠶⣦⡈⠁⣾⣿⠄⠄⠱⡄⠄
        ⠠⣾⣿⣿⣿⡿⢟⣠⣼⣿⣿⣿⣿⣿⣮⡹⣿⣿⠁⢀⢸⣿⡄⢻⣿⣇⠄⢃⡿⠄
        ⠄⠈⢋⣉⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⢸⡇⣿⡇⠄⠋⣸⠋⠄⠄⠈⠉⢉⠥⠖⠁
        ⣠⣾⣿⣿⠟⣫⣔⣒⠻⣿⣿⣿⠹⣿⡘⠷⣭⣭⣭⡭⣥⠄⠄⠄⠄⠄⢰⣵⣾⡧
        ⣿⣿⣿⣿⢸⡟⣍⠻⣷⣜⡻⠿⣿⣶⣤⣤⣤⣤⣴⣾⣿⣦⣀⠄⢀⣠⡿⢟⣋⠄
        ⣿⣿⣿⣿⠸⣧⡹⢿⣮⣙⡻⠷⢦⣭⣛⣛⣛⣛⣛⣛⣛⣛⣛⣫⠭⢖⣚⡍⠁⠄
        ⢿⣿⣿⣿⣧⡻⢷⣤⣀⠄⠙⠛⠷⣦⣬⣭⣭⣭⣭⡍⠉⠁⠄⠄⢀⠰⠛⠄⠄⠄
        ⣦⡙⢿⣿⣿⣿⣷⣮⣝⡻⠷⠶⢤⣤⣬⣭⣭⡭⠥⢤⣤⡤⠶⣊⠁⠄⠄⠄⠄⠄
        ⣿⣿⣦⣭⣛⠻⠿⠿⢟⡻⠐⢃⠒⢥⣤⣄⢤⠠⢈⠂⣵⣶⣾⣿⣆⠄⠄⠄⠄⠄
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠐⠂⠴⢞⠒⠒⡸⠐⢬⢀⣿⣿⣿⣿⣿⣷⡄⠄⠄⠄

        I mean how are you gonna play with no Cells to click...
        This is absolutely pointless.. PepeClown`);
      break;
    default:
      break;
  }

  // Update the game field properties with the new values
  components.num_of_cols = num_of_cols;
  components.num_of_rows = num_of_rows;
  components.num_of_bombs = addBombs(num_of_rows, num_of_cols);
  bombsPlaced = [];
  components.bomb = placeBombs();

  // Clear the game field and create a new table with the updated properties
  document.getElementById("game-field").innerHTML = ` `;
  document.getElementById("game-field").appendChild(createTable());
}
