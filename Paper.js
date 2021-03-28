class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 1.0,
      density: 1.0
    }
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(255, 0, 255);
    imageMode(CENTER);
    image(this.image, 20, 45, this.radius, this.radius);
    pop();
  }
};