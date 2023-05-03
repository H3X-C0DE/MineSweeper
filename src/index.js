let components = {
  num_of_rows: 12, //12
  num_of_cols: 26, //26
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

function checkMobileDevice() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const setFlagElement = document.getElementById("setFlag");
  if (isMobile) {
    setFlagElement.style.display = "block";
  } else {
    setFlagElement.style.display = "none";
  }
}
