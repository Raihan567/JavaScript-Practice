const votes = [
  "JavaScript",
  "Java",
  "python",
  "JavaScript",
  "Java",
  "python",
  "golang",
  "JavaScript",
  "Java",
  "python",
  "JavaScript",
  "golang",
  "Java",
  "python",
  "JavaScript",
  "Java",
  "golang",
  "python",
  "JavaScript",
  "Java",
  "python",
  "golang",
  "JavaScript",
  "python",
  "python",
  "python",
  "PHP",
  "Java",
  "golang",
  "PHP",
  "PHP",
  "PHP",
  "PHP",
  "PHP",
  "PHP",
  "PHP",
  "python",
  "golang",
  "R",
  "R",
  "R",
  "R",
  "C",
  "C",
  "C",
  "C",
  "C",
  "C",
  "C plus",
  "C plus",
  "C plus",
  "C plus",
  "C plus",
  "C plus",
  "C plus",
  "C plus",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C Sharp",
  "C plus",
  "C plus",
  "C plus",
  "C plus",
  "C",
  "C",
  "C",
  "C",
  "R",
  "R",
  "R",
  "golang",
  "JavaScript",
  "Java",
  "JavaScript",
  "JavaScript",
  "python",
  "JavaScript",
  "Java",
  "python",
];
const result = votes.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(result);
