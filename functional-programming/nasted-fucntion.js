/**
 * title: Nested function or inner function
 */

function outer() {
  var a = 20;
  function inner() {
    a;
    console.log("I am from inner function");
  }
  console.log("I am from outer function");
  inner();
}

// outer();

// nested function sum
function add(a, b) {
  function sum() {
    return a + b;
  }
  function sub() {
    return a - b;
  }
  function times() {
    return a * b;
  }
  function div() {
    return a / b;
  }
  return sum() + sub() + times() + div();
}

let result = add(10, 20);
console.log(result);
