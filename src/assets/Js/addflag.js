let flagMode = false;

function toggleFlagMode() {
  flagMode = !flagMode;
  if (flagMode) {
    document.getElementById("setFlag").innerHTML = "Disable Flag Mode";
    console.log(flagMode);
  } else {
    document.getElementById("setFlag").innerHTML = "Enable Flag Mode";
    console.log(flagMode);
  }
}

function cellClickHandler(event) {
  if (flagMode) {
    const cell = event.target;
    cell.innerHTML = "🚩";
    cell.style.backgroundColor = "#c3c3c3";
    playFlag();
  } else {
    // handle regular cell click here
  }
}
