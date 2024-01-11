let s = `    Hello World!       `;

console.log(s.trim()); // Hello World!

let name = "HM Nayem";
let age = 23;

console.log(
  `My name is ${name} and I am ${age} years old. Also I am ${
    age < 18 ? "not" : ""
  }adult`
); // My name is HM Nayem and I am 23 years old.


console.log('M'.repeat(10)) // MMMMMMMMMM
console.log('Maruf'.padStart(10, '*')) // *****Maruf
console.log('Maruf'.padEnd(10, '*')) // Maruf*****