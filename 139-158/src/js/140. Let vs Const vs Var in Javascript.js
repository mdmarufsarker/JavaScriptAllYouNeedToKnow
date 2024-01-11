// var vs let vs const

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a)(
  // 10
  // console.log(b) // ReferenceError: b is not defined
  // console.log(c) // ReferenceError: c is not defined

  function () {
    var a = 10;
    let b = 20;
    const c = 30;
  }
)();

console.log(a); // TypeError: a is not defined

{
  let test = "Hello";
}

console.log(test); // ReferenceError: test is not defined
