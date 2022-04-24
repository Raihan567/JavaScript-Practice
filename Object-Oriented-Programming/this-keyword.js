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

// function myFunc() {
//   function inner() {
//     console.log(this);
//   }
//   inner();
// }
// myFunc();
let myPrint = person.print.bind(person);
// console.log(myPrint);
myPrint();

// function add(num) {
//   return this.value + num;
// }
// let obj = {
//   value: 10,
// };
// let obj2 = {
//   value: 30,
// };
// let binned = add.bind(obj2);
// console.log(binned(40));

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
