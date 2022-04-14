let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Remove first element
numbers.shift(); // [2, 3, 4, 5, 6, 7, 8, 9];

//  Remove last element
numbers.pop(); // [1, 2, 3, 4, 5, 6, 7, 8];
numbers.length = numbers.length - 1;

// Remove inside element splice using index
numbers.splice(
  2,
  0
); /* 1. first index koto number index theke shuru hobe 2. koyta element delete hobe 3. koto gula element add hobe por por boste thakbe. */

const toBeDelete = 5;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === toBeDelete) {
    numbers.splice(i, 2);
  }
} //delete 2 element [5 and 6]

// Filter array
const toBeDelete1 = 9;
numbers = numbers.filter((item) => item !== toBeDelete1); // delete 9

// Delete operator
// numbers[1] = undefined;
// delete numbers[1];

// Reset Whole array
let x = [1, 2, 3, 4, 5];
let y = x;
x = [];
console.log(x, y); // x, y = [], [1, 2, 3, 4, 5]

// Alternatives
let xx = [1, 2, 3, 4, 5];
let yy = xx;
xx.length = 0;
console.log(xx, yy); // [], []

// reset array using while loop
while (numbers.length) numbers.pop(); // []

console.log(numbers);
