const shapeColor = "#000";
const fontSize = 800;

function setup() {
  createCanvas(1000, 1000);
  background(20, 20, 30);
  strokeWeight(1);
  noFill();
  createLetters();
  translate(width / 2 - fontSize / 2, fontSize / 3); //position
  for (const item of letters) {
    item.draw();
  }
}

let font;
function preload() {
  font = loadFont("Regular.otf"); // I add a font here to create this style
}

class Letter {
  constructor(char, x, y, angle) {
    this.char = char;
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  draw() {
    let path = font.textToPoints(this.char, this.x, this.y, fontSize, {
      sampleFactor: 0.1,
    });
    console.log(path);
    stroke(shapeColor);
    for (let d = 0; d < 40; d += 4) {
      stroke(random(255), random(255), random(255)); //Colorful text
      beginShape();
      for (let i = 0; i < path.length; i++) {
        let pos = path[i]; //Current coordinates of this point
        let nextPos = path[i + 1]; //Coordinates of the next point
        if (nextPos) { 
          let p0 = createVector(pos.x, pos.y);
          let p1 = createVector(nextPos.x, nextPos.y);
          let v = p5.Vector.sub(p1, p0);
          v.normalize();
          v.rotate(this.angle);
          v.mult(-d);
          let pneu = p5.Vector.add(p0, v);
          curveVertex(pneu.x, pneu.y);
        }
      }
      endShape(CLOSE);
    }
  }
}

const textTyped = " <";
const letters = [];
function createLetters() {
  let chars = textTyped.split("");
  let x = 0;
  for (let i = 0; i < chars.length; i++) {
    if (i > 0) {
      let charsBefore = textTyped.substring(0, i);
      x = font.textBounds(charsBefore, 0, 0, fontSize).w;
    }
    let newLetter = new Letter(chars[i], x, height / 2, HALF_PI);
    letters.push(newLetter);
  }
}

