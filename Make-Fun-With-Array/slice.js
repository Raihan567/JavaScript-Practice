/* Title: Slice arrays into multiple arrays */

// slice
const arr = [1, 2, 3, 4, 5, 6];
const sliced = arr.slice(2, 5);
console.log(sliced); // [3,4,5]

// array clone
const cloned = arr.slice();
console.log(arr === cloned); // false

// Array like object to array
function toArray() {
  return Array.prototype.slice.call(arguments);
}
const argArray = toArray(1, 2, 3, 4, 5, "test", "example");
console.log(argArray);
// console.log(argArray.__proto__.constructor);
