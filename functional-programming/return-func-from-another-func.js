/**
 * Title: Return function from another function
 */
function host() {
  console.log(`I am the host function`);

  return function () {
    console.log("I am the child function");
  };
}

let a = host();
a();

function greetings(msg) {
  return function (name) {
    console.log(`${msg}, ${name} how are you?`);
  };
}
let hello = greetings("Hello");
let greet = greetings("Good morning");
hello("Miss Sumaiya");
greet("Mr. Raihan");
