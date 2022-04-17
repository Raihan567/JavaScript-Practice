const array = [1, 2, 3, 64, 65, 76, 87, 99, 100, 5, 23, 34, 45];
const searchBinary = (arr, key) => {
  let lowest = 0;
  let highest = arr.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((highest + lowest) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] > key) highest = mid - 1;
    if (arr[mid] < key) lowest = mid + 1;
  }
  return -1;
};

const index = searchBinary(
  array.sort((a, b) => a - b),
  100
);
console.log(index);

const searchBinaryCB = (arr, cb) => {
  let lowest = 0;
  let highest = arr.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((highest + lowest) / 2);
    if (cb(arr[mid])) return arr[mid];
    // if (cb(arr[mid])) highest = mid - 1;
    // if (cb(arr[mid])) lowest = mid + 1;
  }
  return -1;
};

const index2 = searchBinaryCB(
  array.sort((a, b) => a - b),
  100
);
console.log(index2);
