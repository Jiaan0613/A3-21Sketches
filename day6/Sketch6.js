const canvasWidth = 1000;
const canvasHeight = 1000;
let mysymbol;
let pg;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);
  noStroke();

  mysymbol = new MySymbol(width / 2, height / 2);

  pg = createGraphics(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  pg.background(0);
  mysymbol.draw(pg);
  

  pg.loadPixels();
  for (let x = 0; x < pg.width; x += 20) {
    for (let y = 0; y < pg.height; y += 20) {
      const c = pg.get(x, y);
      if (brightness(color(c)) > 50) {
        fill(color(random(255), random(255), random(255))); //Change the color style
        rect(x, y, 20);
      }
    }
  }

  // image(pg, 0, 0);
}

class MySymbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.point1 = { x: -200, y: 0 };
    this.point2 = { x: 200, y: 220 };
    this.point3 = { x: 200, y: 300 };
    this.point4 = { x: -250, y: 50 };
    this.point5 = { x: -250, y: -50 };
    this.point6 = { x: 200, y: -300 };
    this.point7 = { x: 200, y: -220 };
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
