let myFont;
function preload() {
  myFont = 
  loadFont ('GT-Zirkon-Black-Trial.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 10);
  textFont (myFont)
  textSize(mouseY*2)
  textAlign(CENTER, CENTER)
  text('beans', width/2, height/2)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}