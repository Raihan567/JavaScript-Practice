function Person(name, email) {
  this.name = name;
  this.email = email;
  this.print = function () {
    console.log(`name: ${this.name}`);
  };
}

let p1 = new Person("Abu Raihan", "abu.raihan@gmail.com");
let p2 = new Person("Sumaiya", "sumaiya.afrin@gmail.com");
let p3 = new Person("Retina", "retina.afrin@gmail.com");

let people = [p1, p2, p3];
// console.log(p1.name, p1.email);
// console.log(p2.name, p1.email);

// people.forEach(function (person) {
//   // console.log(`Email: ${person.email}`);
//   person.print();
// });

// for (let props in p1) {
//   console.log("Props:" + props);
// }

function Book(name, author, price) {
  this.name = name;
  this.author = author;
  this.price = price;
}

let book = new Book("Functional javaScript", "Micbeal fogus", 30);
console.log(book.constructor);
