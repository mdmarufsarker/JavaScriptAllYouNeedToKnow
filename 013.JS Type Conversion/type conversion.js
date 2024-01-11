var str = '1000'
var n = 10

console.log(str + n) // 100010
console.log(Number(str) + n) // 1010
console.log(n.toString()) // '10'

/*
Falsy Values:
-------------
''
0
null
undefined
NaN
false
*/
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(false)) // false

/*
Truthy Values:
--------------
' '
'0'
[]
{}
true
*/
console.log(Boolean(' ')) // true
console.log(Boolean('0')) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true
console.log(Boolean(true)) // true