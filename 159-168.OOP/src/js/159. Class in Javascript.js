class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("Drawing...");
  }
}

let rect = new Rectangle(10, 20);
rect.draw();
console.log(typeof Rectangle);
