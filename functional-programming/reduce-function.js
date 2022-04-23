/**
 * Title: Reduce function
 */

let arr = [1, 2, 4, 34, 35, 4, 5, 54];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let sum2 = arr.reduce(function (acc, cur) {
  return (acc += cur);
});
console.log(`sum2 ${sum2}`);
