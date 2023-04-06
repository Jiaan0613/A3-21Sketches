const canvasWidth = 1000;
const canvasHeight = 1000;
let mysymbol;
let pg;
let pg2;

let textList = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(220,20,60);
  frameRate(60);
  noStroke();

  mysymbol = new MySymbol(width / 2, height / 2);

  pg = createGraphics(canvasWidth, canvasHeight);
  pg2 = createGraphics(canvasWidth, canvasHeight);

  pg.background(220,20,60);
  pg2.background(0);

  pg.noFill();
  pg.stroke(255,192,203);
  pg.strokeWeight(50);

  mysymbol.draw(pg2);

  for (let x = 0; x < pg.width; x += 3) { //direction and shape
    for (let y = 0; y < pg.height; y += 30) {
      const currentC = pg2.get(x, y);
      if (brightness(color(currentC)) > 50) {
        fill(255);
        const s = new MyShape(x, y);
        textList.push(s);
      }
    }
  }
}

function draw() {
  background(0);
  if (frameCount % 3 == 0) { // if the number increase, it will be a line
    pg.background(220,20,60);
  }

  for (const item of textList) {
    item.updateScale(sin(frameCount / 10 + item.x + item.y) * 0.2 * 0.1 + 0.1);
    // item.updatePos(
    //   item.x - sin(frameCount + sin(item.x / 5)) * 4,
    //   item.y + cos(frameCount - cos(item.y / 5)) * 4
    // );
    item.draw(pg);
  }

  image(pg, 0, 0);
}

class MyShape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  updateScale(scale) {
    this.scale = scale;
  }

  updatePos(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(pg) {
    if (pg) {
      pg.push();
      pg.fill(255,192,203);
      pg.translate(this.x, this.y);
      pg.scale(this.scale);
      pg.ellipse(this.x, this.y, 3);
      pg.pop();
    } else {
      push();
      fill(255,192,203);
      translate(this.x, this.y);
      scale(this.scale);
      ellipse(this.x, this.y, 3);
      endShape(CLOSE);
      pop();
    }
  }
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

    this.scale = 1;
    this.T = 0;
  }

  updateScale(scale) {
    this.scale = scale;
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
      pg.fill(255,192,203);
      pg.translate(this.x, this.y);
      // pg.rotate(sin(frameCount / 10) * 2 * PI);
      pg.scale(this.scale);
      pg.beginShape();
      for (const item of pointList) {
        pg.vertex(item.x, item.y);
      }
      pg.endShape(CLOSE);
      pg.pop();
    } else {
      push();
      fill(255,192,203);
      translate(this.x, this.y);
      scale(this.scale);
      // rotate(sin(frameCount / 10) * PI);
      beginShape();
      for (const item of pointList) {
        vertex(item.x, item.y);
      }
      endShape(CLOSE);
      pop();
    }
  }
} //at first its create by multiple lines, I changed it into point