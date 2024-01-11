class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("Drawing...");
    console.log(this.calculate());
  }
}

export default Shape;