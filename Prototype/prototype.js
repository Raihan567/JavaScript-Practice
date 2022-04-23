const captain = {
  name: "Raihan",
  age: 19,
  country: "Bangladesh",
};
const student = Object.create(captain);
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.country);

function text() {}
console.dir(text);

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}

Person.prototype = {
  eat() {
    console.log(`Person is eating`);
  },
  play() {
    console.log(`Person is playing`);
  },
  run() {
    console.log(`Person is running`);
  },
};
const raihan = Person("raihan", 19);
raihan.run();

let persons = new Array();
console.log(Array.prototype);

let object = new Object();
console.log(Object.prototype);
