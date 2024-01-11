class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }

  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

let str = `{ "name": "Maruf Sarker", "email": "maruf@gmail.com" }`;

let p1 = Person.create(str);
console.log(p1); // Object { name: "Maruf Sarker", email: "maruf@gmail.com" }
console.log(p1 instanceof Person); // true
console.log(typeof p1); // object
p1.print(); // Name: Maruf Sarker, Email: maruf@gmail.com
