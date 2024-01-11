class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("Drawing...");
    console.log(this.calculate());
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }
  calculate() {
    return this.width * this.height;
  }
  draw() {
    console.log("Drawing Rectangle...");
  }
}

const r1 = new Rectangle(10, 20, "green");
console.log(r1);
r1.draw();
