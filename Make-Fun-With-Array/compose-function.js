const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;
const result = div2(times3(add10(10)));
console.log(result);

/**
 * 10 + 10 = 20
 * 20 * 3 = 60
 * 60 / 2 = 30
 */
