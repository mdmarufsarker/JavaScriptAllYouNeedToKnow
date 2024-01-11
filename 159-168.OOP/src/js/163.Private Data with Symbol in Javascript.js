const _radius = Symbol();
const _name = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
    this[_name] = "Maruf";
  }

  [_draw]() {
    console.log("Drawing...");
  }
}

const c1 = new Circle(1);
console.log(c1);

let keyRadius = Object.getOwnPropertySymbols(c1)[0];
let keyName = Object.getOwnPropertySymbols(c1)[1];
console.log(c1[keyRadius], c1[keyName]);
