const canvasWidth = 1000;
const canvasHeight = 1000;
let mysymbol;
let pg;
let pg2;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);
  noStroke();

  mysymbol = new MySymbol(width / 2, height / 2);

  pg = createGraphics(canvasWidth, canvasHeight);
  pg2 = createGraphics(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  pg.background(0);
  pg2.background(0);

  pg.noFill();
  pg.stroke(255);
  pg.strokeWeight(50);
  let x1 = 0;
  let y1 = height;
  let x2 = width;
  let y2 = height;
  for (let i = 0; i < height; i += 100) {
    pg.line(x1, y1 - i, x2, y2 - i); //I just change the line direction here
  }

  mysymbol.draw(pg2);

  for (let x = 0; x < pg.width; x += 20) {
    for (let y = 0; y < pg.height; y += 20) {
      const currentC = pg2.get(x, y);
      const c = pg.get(x, y);
      if (brightness(color(currentC)) > 50) {
        fill(255);
        if (brightness(color(c)) > 50) {
          fill(color(random(255), random(255), random(255)));
        }
        rect(x, y, 20);
      }
    }
  }

}

class MySymbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.point1 = { x: -300, y: 0 };
    this.point2 = { x: 300, y: 320 };
    this.point3 = { x: 300, y: 400 };
    this.point4 = { x: -350, y: 50 };
    this.point5 = { x: -350, y: -50 };
    this.point6 = { x: 300, y: -400 };
    this.point7 = { x: 300, y: -320 };
  }

  updatePos(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(pg) {
    const pointList = [
      this.point1,
      this.point2,
      this.point3,
      this.point4,
      this.point5,
      this.point6,
      this.point7,
    ];
    if (pg) {
      pg.push();
      pg.fill(255);
      pg.translate(this.x, this.y);
      pg.beginShape();
      for (const item of pointList) {
        pg.vertex(item.x, item.y);
      }
      pg.endShape(CLOSE);
      pg.pop();
    } else {
      push();
      fill(255);
      translate(this.x, this.y);
      beginShape();
      for (const item of pointList) {
        vertex(item.x, item.y);
      }
      endShape(CLOSE);
      pop();
    }
  }
}