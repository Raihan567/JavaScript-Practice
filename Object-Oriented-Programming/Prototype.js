/**
 * Title: Prototype
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Person.prototype.hello = function () {
//   console.log(`Hello, ${this.name}`);
// };
// Person.prototype.cash = 4000;
// Person.prototype.email = "aburaihan.official@gmail.com";
Person.prototype = {
  hello: function () {
    console.log("name: " + this.name);
  },
  print: function () {
    console.log(this.name, this.email);
  },
  email: "sumaiya.afrin@gmail.com",
};
let p1 = new Person("Abu Raihan", 19);
let p2 = new Person("Sumaiya Afrin ", 18);
console.log(p1);
console.log(p2);
// console.log(Person.prototype);
