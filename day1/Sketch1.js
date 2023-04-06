const canvasWidth = 1000;
const canvasHeight = 1000;
let blinkInterval = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(15); // Here is the speed of blinking.
  noStroke();
}

function draw() {
  background(0);

  const symbolX = width / 3.5;
  const symbolY = height / 1.5;
  const symbolSize = 500; 

  const symbolR = Math.floor(Math.random() * 256);
  const symbolG = Math.floor(Math.random() * 256);
  const symbolB = Math.floor(Math.random() * 256); // here is for the different color change.
  fill(symbolR, symbolG, symbolB);

  textSize(symbolSize);
  text("<", symbolX, symbolY); //I don't know how to draw the symbol at first, so I just text...

  blinkInterval = Math.floor(Math.random() * 70) + 300;
  setTimeout(function () {
    redraw();
  }, blinkInterval);
}
