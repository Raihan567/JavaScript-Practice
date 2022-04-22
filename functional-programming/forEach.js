/**
 * Title: ForEach method implementation
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function (element, index, array) {
//   console.log(
//     `Element is = ${element}, index is = ${index} and array is = ${array}`
//   );
// });

function name(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
console.log(`--------------Implement ForEach-------------------`);
name(arr, function (element, index, array) {
  console.log(`Element = ${element}, index = ${index} and Array = ${array}`);
});
console.log("--------------built in ForEach----------------------");
arr.forEach(function (element, index, array) {
  console.log(`Element = ${element}, index = ${index} and Array = ${array}`);
});
console.log(`----------------Element----------------`);
arr.forEach((element) => {
  console.log(`Element = ${element}`);
});

arr.forEach(function (element, index, array) {
  console.log(`Element = ${element}, index = ${index} and array = [${array}]`);
});
