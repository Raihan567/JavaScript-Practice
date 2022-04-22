/**
 * Title: ForEach method implementation
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function (element, index, array) {
//   console.log(
//     `Element is = ${element}, index is = ${index} and array is = ${array}`
//   );
// });

function loop(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
loop(arr, function (element, index, array) {
  console.log(
    `Element is = ${element}, index is = ${index} and array is = ${array}`
  );
});
