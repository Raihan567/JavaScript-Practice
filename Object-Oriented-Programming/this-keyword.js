/**
 * Title: This keyword...
 */
let person = {
  name: "Abu Raihan",
  print: function () {
    // console.log(this);
    console.log(`name: ${this.name}`);
  },
};

function myFunc() {
  function inner() {
    console.log(this);
  }
  inner();
}
myFunc();
let myPrint = person.print.bind(person);
// console.log(myPrint);
myPrint();

function add(num) {
  return this.value + num;
}
let obj = {
  value: 10,
};
let obj2 = {
  value: 30,
};
let binned = add.bind(obj2);
console.log(binned(40));

let person2 = {
  name: "Abu Raihan",
  print: function () {
    setTimeout(() => {
      console.log(this);
      console.log(`Hello ${this.name}, What's up?`);
    }, 2000);
  },
};
person2.print();

/**
 * Title: Learn with Sumit "This-keyword"
 */

var sakib = {
  name: "sakib",
  age: 36,
  printPlayerName: function () {
    console.log(this.name);
  },
};
sakib.printPlayerName(); // Implicit binding [it's only work for normal function not arrow function.]

// Example: 1
var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

var sakib = {
  name: "Sakib",
  age: 35,
};

var tamim = {
  name: "Tamim",
  age: 36,
};
printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);
sakib.printPlayerName();
tamim.printPlayerName();

// Example: 2
var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
  };
};
var sakib = Person("sakib", 35);
sakib.printName();

// Example: 3
var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. XXX",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};
var sakib = Person("sakib", 35);
sakib.printName();
sakib.father.printName();

/**
 * Title: Explicit Binding:
 */
// Example: 1
var printName = function (v1, v2, v3) {
  console.log(`${this.name} is a ${v1}, ${v2} & ${v3}`);
};
var sakib = {
  name: "Raihan",
  age: 35,
};
var v1 = "Handsome";
var v2 = "Programmer";
var v3 = "Student";
printName.call(sakib, v1, v2, v3);

// Example: 2

var printName = function (v1, v2, v3) {
  console.log(`${this.name} is a ${v1}, ${v2} & ${v3}`);
};
var sakib = {
  name: "Raihan",
  age: 35,
};
var v1 = "Handsome";
var v2 = "Programmer";
var v3 = "Student";
var virtu = [v1, v2, v3];
printName.apply(sakib, [v1, v2, v3]);

/**
 * Title: New Binding
 */
// Example: 1

function Person1(name, age) {
  this.name = name;
  this.age = age;
  console.log(`${name} is ${age} years old`);
}

var result = new Person1("Raihan", 19);

/**
 * Title: window binding
 */
// Example: 1
var printName1 = function () {
  console.log(this.name); //undefined
};
var sakib = {
  name: "sakib",
};
printName1() //refer to window object
