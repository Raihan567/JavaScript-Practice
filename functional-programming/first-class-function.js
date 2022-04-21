/**
 * Title: Functional Programming
 */

// 1. We can be stored function as an variable.

function sayName(name) {
  return "Hello, " + name;
}

let hello = sayName;
// console.log(hello);
// console.log(hello("raihan"));
let anotherFunction = hello;
// console.log(anotherFunction("Abu Raihan"));

// 2. we can be stored function in an array
let arr = [12, 34, 34, 34, 34, anotherFunction("Raihan")];
arr.push(hello("abu raihan"));

// console.log(arr);

// 3. Function can be stored is an object or field
let person = {
  name: hello("Raihan"),
  print: function () {
    return console.log("Hi");
  },
};

// console.log(person);

// 4. we can create function as needed.
let sum =
  10 +
  (function () {
    return 100;
  })();
// console.log(sum);

// 5. we can pass function as an argument
function wow(name, fun) {
  return fun(name);
}
let result = wow("Abu-Raihan", sayName);
// console.log(result);

// 6. We can return function from another function
function base(b) {
  return function (n) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
// let power = base(2);
// let square = power(2);
// console.log(square);

let square = base(2)(8);
console.log(square);

let cube = base(3)(5);
console.log(cube);
