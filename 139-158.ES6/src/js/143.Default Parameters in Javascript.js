function sqr(n) {
  return n * n;
}

console.log(sqr(2)); // 4
console.log(sqr()); // NaN

function sqr2(n) {
  if (!n) n = 1;
  return n * n;
}

console.log(sqr2(2)); // 4

function sqr3(n) {
  n = n || 1;
  return n * n;
}

console.log(sqr3(2)); // 4

// Solution
function sqr4(n = 1) {
  return n * n;
}

console.log(sqr4(2)); // 4

function ask(name = "Maruf", msg) {
  console.log(`Hello ${name}. ${msg}`);
}

ask("Hello", "Why you are here?"); // Hello undefined
