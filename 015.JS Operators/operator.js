// Arithmetic Operators
// +, -, *, /, %, ++, --

console.log(10 + 5) // 15
console.log(10 - 5) // 5
console.log(10 * 5) // 50
console.log(10 / 5) // 2
console.log(10 % 5) // 0

var a = 10
console.log(a++) // 10
console.log(a) // 11
console.log(++a) // 12
console.log(a) // 12

console.log(a--) // 12;
console.log(a) // 11
console.log(--a) // 10
console.log(a) // 10

// Assignment Operators
// =, +=, -=, *=, /=, %=

var a = 10
var b = 2, c = 2, d = 2, e = 2, f = 2
b += a // b = b + a
c -= a // c = c - a
d *= a // d = d * a
e /= a // e = e / a
f %= a // f = f % a

console.log(b) // 12
console.log(c) // -8
console.log(d) // 20
console.log(e) // 0.2
console.log(f) // 0

// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

var a = 10
var b = 20

console.log(a == b) // false
console.log(a != b) // true
console.log(a > b) // false
console.log(a < b) // true
console.log(a >= b) // false
console.log(a <= b) // true

// Logical Operators
// &&, ||, !

var a = 10
var b = -20

console.log(a > 0 && b > 0) // false;
console.log(a > 0 || b > 0) // true;
console.log(!(a > 0)) // false

// Bitwise Operators
// &, |, ^, ~, <<, >>

var a = 10
var b = 20

console.log(a & b) // 0
console.log(a | b) // 30
console.log(a ^ b) // 30
console.log(~a) // -11
console.log(a << 2) // 40
console.log(a >> 2) // 2


// typeof Operator

var a = 10
var b = 'JavaScript'
var c = true

console.log(typeof a) // number
console.log(typeof b) // string
console.log(typeof c) // boolean