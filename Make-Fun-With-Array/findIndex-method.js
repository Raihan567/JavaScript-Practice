const arr = [1, 23, 43, 43, 5, 45, 4, 54, 6, 56, 324, 4, 5, 34];
const todos = [
  { name: "Project 1", isDone: false },
  { name: "Project 2", isDone: true },
  { name: "Project 3", isDone: true },
  { name: "Project 4", isDone: true },
  { name: "Project 5", isDone: false },
  { name: "Project 6", isDone: true },
  { name: "Project 7", isDone: false },
  { name: "Project 8", isDone: false },
  { name: "Project 9", isDone: true },
  { name: "Project 10", isDone: false },
  { name: "Project 11", isDone: true },
];
const index = arr.findIndex((item) => item === 56);
console.log(index);

const index2 = todos.findIndex((item) => item.isDone === true);

console.log(index2);

const result = [
  { name: "Raihan", score: 98 },
  { name: "Sumaiya", score: 89 },
  { name: "Aforoja", score: 70 },
  { name: "Natasha", score: 95 },
  { name: "Parvin", score: 78 },
];
const highest2 = 98;
const student = result.find((item) => item.score === highest2);
console.log(student);

const names = ["stack", "learner", "and", "stack", "school"];
console.log(names.join(' '));
