let n = 10
let str = ''

if (n % 2 == 0) {
    str = 'Even'
}else{
    str = 'Odd'
}

console.log(str);

// Ternary Operator
// Syntax: condition ? true : false

let result = n % 2 == 0 ? 'Even' : 'Odd'
console.log(result);

// same code
result = n & 1 ? 'Odd' : 'Even'
console.log(result);