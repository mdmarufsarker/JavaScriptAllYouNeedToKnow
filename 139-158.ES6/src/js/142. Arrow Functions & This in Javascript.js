function test() {
  console.log(this);
}

test(); // undefined

let obj = {
  name: "Test",
  print: () => {
    console.log(this);
  },
};

obj.print(); // undefined

let obj2 = {
  name: "Maruf",
  print: function () {
    let self = this;
    setTimeout(function () {
      console.log(`Hello ${self.name}`);
    }, 1000);
  },
};

obj2.print(); // Hello Maruf

let obj3 = {
  name: "Maruf",
  print: function () {
    setTimeout(
      function () {
        console.log(`Hello ${this.name}`);
      }.bind(this),
      1000
    );
  },
};

obj3.print(); // Hello Maruf

let obj4 = {
  name: "Maruf",
  print: function () {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  },
};

obj4.print(); // Hello Maruf
