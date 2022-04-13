/*
 * Title: Update array element
 */

// Array fill manual way
const arr1 = new Array(10);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = false;
}
console.log(arr1);

// Array Fill
const arr2 = new Array(10);
arr2.fill("Hello");
console.log(arr2);

const names = ["Raihan", "Sara", "Sumaiya"];
names[0] = "Abu Raihan";
names[1] = "Sara Mony";
names[2] = "Sumaiya Afrin";

console.log(names);

// Simple tic toe project
const response = new Array(9);
for (let i = 0; i < response.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  response[i] = rand > 5 ? "x" : "y";
}
console.log(response);

// Array is mutable

const update = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
};

update(names);
console.log(names);
