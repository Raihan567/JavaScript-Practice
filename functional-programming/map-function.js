/**
 * Title: Map function Implementation
 */

let arr = [2, 3, 4, 4, 6, 5, 75, 76, 45, 23, 23, 45, 7, 87];
// let mappedArr = [];
// for (let i = 0; i < arr.length; i++) {
//   mappedArr.push(arr[i] + 2);
// }

//     callback(arr[i]);
//     console.log(`${mappedArr}`);
// console.log(mappedArr);

let store = arr.map(function (v) {
  return v + 1;
});
console.log(`newArr ${store}`);
console.log(`---------------------------------`);
let store2 = arr.map(function (v) {
  return v - 1;
});
console.log(`store2: ${store2}`);
