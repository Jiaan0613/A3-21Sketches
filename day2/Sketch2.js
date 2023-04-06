function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  blendMode(LIGHTEST); // this one I learned from p5 js website.
  strokeWeight(100);
  stroke(80, 150, 255);
  line(300, 500, 600, 200);
  stroke(255, 50, 50);
  line(300, 500, 600, 800); // I draw 2 lines for the symbol.
}
