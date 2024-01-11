let a = 30;
let b = 20;
let c = 30;
let d = 40;

if (a > b && c > d) {
  console.log("A is greater than B and C is greater than D");
}else{
    console.log("At least one condition is false");
}

if(a > b || c > d){
    console.log("A is greater than B or C is greater than D");
}else{
    console.log("At least one condition is false");
}

let check = !(a > b);
console.log(check);