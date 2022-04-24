/**
 * Title: Call, Apply, bind method explore
//  */
// function callMe() {
//   console.log(`Hello, ${this.name}, Email: ${this.email}, ${this.age}`);
// }

// let obj1 = {
//   name: "Abu raihan",
//   age: 19,
//   email: "abu.raihan@gmail.com",
// };

// let obj2 = {
//   name: "Sumaiya Afrin",
//   age: 18,
//   email: "sumaiya.afrin@gmail.com",
// };
// let store1 = callMe.bind(obj2);
// let store2 = callMe.bind(obj1);
// store1()
// store2()
// console.log("bind:", store1());
// console.log("bind:", store2());

//  callMe.call(obj1);
// callMe.call(obj2);
// console.log(`call: ${result1()}`);
// console.log(`call: ${result2()}`);
function add(a, b) {
  return (a + b) * this.c;
}
let obj1 = {
  c: 5,
};
let obj2 = {
  c: 2,
};
let called = add.call(obj1, 5, 3);
console.log(called);
let binned = add.bind(obj1, 5, 3);
console.log(binned());
let applied = add.apply(obj1, [5, 3]);
console.log(applied);
