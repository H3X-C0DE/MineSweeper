let explosion = new Audio("./src/assets/sound/explosion.mp3");
let dies2 = new Audio("./src/assets/sound/ragdoll.mp3");
let clicked = new Audio("./src/assets/sound/detonate.mp3");
let flag = new Audio("./src/assets/sound/pop.mp3");
let victory = new Audio("./src/assets/sound/kids-yeyye.mp3");

// this is played when user clicks a bomb
function playExplosion() {
  explosion.play();
}
// this is played when user clicks a bomb
function playDies() {
  dies2.play();
}
// this is played when user LeftClick
function playClicked() {
  clicked.play();
}
// this is played when user RightClick
function playFlag() {
  flag.play();
}
// this is played when user clicks all cells not containing bombs
function playVictory() {
  victory.play();
}
