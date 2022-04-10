const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = arr[3];
const m = arr[2];
const x = 1,
  y = 0;
console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

/* Simple Traverse */
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/* 
sum = 0
sum = 0 + 1 = 1
sum = 1 + 2 = 3
sum = 3 + 3 = 6
sum = 6 + 4 = 10
sum = 10 + 5 = 15
*/
/* Array sum & avg */

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  // sum = sum + arr[i];
  sum += arr[i];
  console.log(sum);
  console.log(sum / arr.length);
}

/* Find largest number */
const arr2 = [12, 3, 23, 45, 65, 56, 150, 64, 75, 79, 43, 109, 83];
let largestNumber = 0;
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > largestNumber) {
    largestNumber = arr2[i];
  }
}
console.log(largestNumber);

/* Find smallest number */
let smallestNumber = arr2[0];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < smallestNumber) {
    smallestNumber = arr2[i];
  }
}
console.log(smallestNumber);
