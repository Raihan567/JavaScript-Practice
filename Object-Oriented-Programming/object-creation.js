/**
 * Title: Object oriented Programming.
 * Subtile: Basic object creation.
 */
let book = {
  name: "Learn programming with Raihan",
  author: "Abu Raihan",
  publisher: `O\ Really`,
  page: 250,
  print: function () {
    console.log(`Book: ${this.name}, Author: ${this.author}`);
  },
};
console.log(book["author"]);
console.log(book["name"]);
console.log(`Publisher: ${this.publisher}`);

book.print();

for (let index in book) {
  // console.log(index);
  console.log(` ${index} : ${book[index]}`);
}
