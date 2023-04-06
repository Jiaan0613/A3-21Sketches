const canvasWidth = 1000;
const canvasHeight = 1000;
let mysymbol;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);
  noStroke();

  mysymbol = new MySymbol(width / 2, height / 2);
}

function draw() {
  background(65,105,225);
  mysymbol.draw();
  mysymbol.updatePos(mouseX, mouseY); //When the mouse move, the symbol will also move
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
  } // I draw the symbol use this code

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