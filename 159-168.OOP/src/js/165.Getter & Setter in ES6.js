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

  // getRadius(){
  //   return _radius.get(this);
  // }

  set radius(value) {
    if (value <= 0) throw new Error("Invalid radius");
    _radius.set(this, value);
  }
  get radius() {
    return _radius.get(this);
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

// console.log(c1.getRadius()); // 1

c1.radius = 10;
console.log(c1.radius); // 10
