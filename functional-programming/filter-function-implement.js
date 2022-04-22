/**
 * Title: Filter function implement
 */

let arr = [12, 43, 34, 35, 34, 23, 33, 3, 34, 4, 456, 457, 56, 5, 65, 65];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(`Old array = ${arr}`);
// console.log(`New array = ${newArr}`);

let store = arr.filter(function (v) {
  return v % 2 === 0;
});

// console.log(`Even number ${store}`);
let result = arr.filter(function (v, i, arr) {
  return v % 2 === 1;
});

// console.log(`result = ${result}`);

function myFilter(array, callback) {
  let newArr2 = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr2.push(array[i]);
    }
  }
  return newArr2;
}

let myArr = myFilter(arr, function (ele, index, arr) {
  return ele % 2 === 1;
});
console.log(`odd data: ${myArr}`);

let myArr2 = myFilter(arr, function (ele) {
  return ele % 2 === 0;
});

console.log(`even data: ${myArr2}`);
