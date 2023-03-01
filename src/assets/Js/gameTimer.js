let timerVariable;
let totalSeconds = 0;
let timerStarted = false;

// Add a mousedown event listener to the game board
document.getElementById("box").addEventListener("mousedown", function () {
  // Start the timer if it hasn't started yet and the player is still alive
  if (!timerStarted && components.alive) {
    timerVariable = setInterval(countUpTimer, 1000);
    timerStarted = true;
  }
});

// Increment the timer every second
function countUpTimer() {
  // Increment the total number of seconds
  ++totalSeconds;

  // Calculate the hours, minutes, and seconds from the total number of seconds
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  let seconds = totalSeconds - (hour * 3600 + minute * 60);

  // Add leading zeros to the hours, minutes, and seconds
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update the timer display with the hours, minutes, and seconds
  document.getElementById("count_up_timer").innerHTML =
    hour + ":" + minute + ":" + seconds;

  // Stop the timer if the player is no longer alive
  if (!components.alive) {
    stopTimer();
  }

  // Function to stop the timer
  function stopTimer() {
    clearInterval(timerVariable);
  }
}
