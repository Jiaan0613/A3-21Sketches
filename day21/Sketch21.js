let font;
function preload() {
  font = loadFont("Regular1.otf");
}

const fontSize = 800;

const particleList = [];

function setup() {
  createCanvas(1000, 1000);

  noStroke(255);

  let path = font.textToPoints("<", 300, height / 2 + fontSize / 3, fontSize, {
    sampleFactor: 0.3, //I have tried many values and found that this shows a much more obvious symbol
  });

  for (const vec of path) {
    if (random() < 0.5) {
      particleList.push(
        new Particle({
          x: random(width),
          y: random(height),
          targetX: vec.x,
          targetY: vec.y,
        })
      );
    }
  }
}

function draw() {
  background(0, 50);
  for (const p of particleList) {
    p.move();
    p.draw();
  }
}

class Particle {
  constructor(config) {
    this.startX = config.x;
    this.startY = config.y;

    this.targetPos = createVector(config.targetX, config.targetY);

    this.startPos = createVector(config.x, config.y);

    this.pos = createVector(config.x, config.y);

    this.acc = createVector(0, 0);

    this.c = color(255); //the Design of particles
  }

  move() {
    push();
    translate(this.startPos.x, this.startPos.y);
    let force = p5.Vector.sub(this.targetPos, this.startPos);
    this.pos.add(force.div(100).mult(sin(frameCount / 50))); //the movement of the line
    pop();
  }

  draw() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, 1);
    stroke(255);
    line(this.targetPos.x, this.targetPos.y, this.pos.x, this.pos.y);
    ellipse(this.targetPos.x, this.targetPos.y, 10); //the size of the point
  }
}