class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("Drawing...");
  }
  print = function() {
    console.log(this.width, this.height);
  }
}

let rect = new Rectangle(10, 20);
console.log(rect);
