function add1(a, b) {
  return a + b;
}

let add2 = (a, b) => {
  return a + b;
};

let add3 = (a, b) => a + b;

let square = (a) => a * a;

console.log(add3(5, 6)); // 11
console.log(square(5)); // 25
