function setup() {
  createCanvas(1000, 1000);
  background(221, 160, 221);
  strokeWeight(10);
  textSize(600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(221, 160, 221);
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      stroke(random(64), 244, 208); // this is the color for the point
      point(i + random(-5, 5), j + random(-5, 5));
    }
  }
  let x = width / 2;
  let y = height / 2;
  let txt = "<";  // I also text here ..
  push();
  translate(x, y);
  rotate(radians(frameCount));
  text(txt, 0, 0);
  pop();
}
