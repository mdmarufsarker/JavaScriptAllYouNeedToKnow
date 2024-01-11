const _radius = new WeakMap();
const _name = new WeakMap();
const _resize = new WeakMap();

class Circle {
  constructor(radius) {
    this.size = 100;
    _radius.set(this, radius);
    _name.set(this, "Maruf");
    _resize.set(this, () => {
      console.log(this.size);
    });
  }

  draw() {
    console.log("Drawing...");
    console.log(_radius.get(this), _name.get(this));
    _resize.get(this)();
  }
}

const c1 = new Circle(1);
console.log(c1);

c1.draw();
// Drawing...
// 1 Maruf
// 100
