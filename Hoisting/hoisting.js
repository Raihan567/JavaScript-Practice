/**
 * Title: Understand Deeply Hoisting
 */
console.log(a);
var a = "bangladesh   ";

let LANGUAGE = "java";
let language = "JavaScript";
function getLanguage() {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}

console.log(`I love ${getLanguage()}`);
function myFunc() {
  var student;
  student = "Raihan";
  console.log(student);
}
myFunc();
// console.log(student); // student is not defined here, given error. student variable available inside of myFunc function
mouse = "keyboard";
console.log(mouse);
