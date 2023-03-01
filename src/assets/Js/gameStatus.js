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
