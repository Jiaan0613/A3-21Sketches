const canvasWidth = 1000;
const canvasHeight = 1000;
let mysymbol;
let mysymbol1;
let mysymbol2;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);
  noStroke();

  mysymbol = new MySymbol(width / 2, height / 2);
  mysymbol1 = new MySymbol(width / 2, height / 2);
  mysymbol2 = new MySymbol(width / 2, height / 2);
}

function draw() {
  background(255,255,0);
  mysymbol.draw();
  mysymbol.updatePos(mouseX - 100, mouseY - 100);

  mysymbol1.draw();
  mysymbol1.updatePos(mouseX, mouseY);

  mysymbol2.draw();
  mysymbol2.updatePos(mouseX + 100, mouseY + 100);
} // three different position symbol

class MySymbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.c = color(random(70,130,180), random(0,191,255), random(135,206,250)); // I chose three similar color.

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
    push();
    fill(this.c);
    translate(this.x, this.y);
    beginShape();
    for (const item of pointList) {
      vertex(item.x, item.y);
    }
    endShape(CLOSE);
    pop();
  }
}
