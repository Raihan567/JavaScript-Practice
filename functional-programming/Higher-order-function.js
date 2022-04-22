/**
 * Title: Higher order function
 */
function caller() {
  return function (name) {
    return "caller calling you" + " " + name;
  };
}
// let a = caller()("Raihan");
// console.log(a)
// let a = caller
// let b = a()('abu Raihan')
// console.log(b);

let a = caller();
let b = a("Mr Raihan");
// console.log(b);


