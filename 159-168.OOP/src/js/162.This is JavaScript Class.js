function Shape() {
  this.draw = function () {
    console.log(this);
  };
}

let s1 = new Shape();
let anotherDraw = s1.draw;
anotherDraw(); // undefined

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }

  test() {
    console.log(this);
  }

  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

let str = `{ "name": "Maruf Sarker", "email": "maruf@gmail.com" }`;

let p1 = Person.create(str);
let test = p1.test;
test() // undefined