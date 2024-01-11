import Shape from "./Shape.js";

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

export default Rectangle;