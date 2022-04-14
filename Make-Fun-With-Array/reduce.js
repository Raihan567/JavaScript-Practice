const numbers = [1, 2, 3, 4, 5, 6];

function myFunc(a, b) {
  return a + b;
}

const sum = numbers.reduce(myFunc);
console.log(sum / numbers.length); // sum given result 3.5

const avg = numbers.reduce((previousValue, currentValue, index, arr) => {
  previousValue += currentValue;
  if (index === arr.length - 1) {
    return previousValue / arr.length;
  }
  return previousValue;
});
console.log(avg);

// sum of reduce method
const avg2 = numbers.reduce((acc, cur, index, arr) => {
  acc += cur;
  if (index === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
});

console.log(avg2); 
