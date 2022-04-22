/**
 * Title: Sort Array of Object
 */

let arr = [
  12, 23, 43, 45, 34, 12, 45, 65, 76, 87, 56, 3, 45, 67, 8, 6, 84, 5, 4,
];
// Ascending order
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
);
// Descending order
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);

var people = [
  { name: "Raihan", age: 19 },
  { name: "Sumu", age: 21 },
  { name: "Madhobi", age: 22 },
  { name: "Afrin", age: 32 },
  { name: "tasmil", age: 21 },
  { name: "Karim", age: 12 },
  { name: "Jamil", age: 21 },
  { name: "KosimUddin", age: 34 },
];

// people.sort(function (a, b) {
//   return a.age - b.age;
// });

people.sort(function (a, b) {
  return a.age - b.age;
});

people.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log(people);
