const name = "Abu Raihan";
let a = 5;
let ab = "t";

let x = 5;
let z = Math.pow(x, 2);

function myFunc(p1, p2) {
  return p1 * p2;
}
function myMultiply(para1, para2) {
  return para1 * para2;
}
// fahrenheit to celsius
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log("Celsius result will be: ", toCelsius(77));

// celsius to fahrenheit
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log("Fahrenheit result will be: ", toFahrenheit(20));

var showResult = myMultiply(4, 2);
console.log(showResult); //Result will be displayed 8;

var result = myFunc(5, 4);
console.log(result); // Result will be displayed 20;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  sum: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.lastName);
console.log(person["firstName"]);
console.log(person.age);
console.log(person["eyeColor"]);
console.log(person.sum());

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

let abc = 1234;
let bcd = "1234";
if (abc == bcd) {
  console.log(`Checking double equal`);
}
if (abc === bcd) {
  console.log(`Checking triple equal`);
} else {
  console.log(`Cannot check triple equal`);
}

// Slice method
let txt = "Apple, Banana, Kiwi";
console.log(txt.slice(15, 19)); // slice (start, end)

// Substring method;
let substring = "Apple, Banana, Kiwi";
console.log(txt.substring(15, 19)); // substring(start, end) > 0

// substr
let subTxt = "Apple, Banana, Kiwi";
console.log(txt.substr(7, 6)); // substr (start, length)

// replace text;
let text2 = "Please visit Microsoft!";
let newText = text2.replace("Please", "Kindly");
console.log(newText);

// replace all
let replaceAll = "Please visit Microsoft!";
let newReplaceAll = replaceAll.replaceAll(
  "Please visit Microsoft!",
  "Kindly visit Amazon"
);
console.log(newReplaceAll); // first thing will be reference and second thing will be what we want to replace

// Convert to upper case
let text1 = "Hello World!";
console.log(text1.toUpperCase());

// Convert to lower case
console.log(text1.toLocaleLowerCase());

// Concatenate string
let str1 = "Hello";
let str2 = "World!";
let str3 = str1.concat(" ", str2);
console.log(str3);

// Trim Method
let trimMethod = "      Hello World! Raihan   ";
console.log(trimMethod.trim()); // remove the whitespace from both sides of a string.

// Trim Start method
let trimStart = "                 hello world";
console.log(trimStart.trimStart()); // remove the whitespace from the start side of a string.

// trim end method
let trimEnd = "hello world                      ";
console.log(trimEnd.trimEnd()); // remove the whitespace from the end side of a string.

let numb = 5;
console.log(numb.toString()); // convert to string

// Property access
let property = "Sumaiya  Raihan";
console.log(property.split("  "));
console.log(property[12]);

let firstName = "Abu";
let lastName = "Raihan";
console.log("Welcome to " + firstName + " " + lastName);
console.log(`Welcome to ${firstName} ${lastName}`);

let price = 34;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

const result2 = (p1, p2) => {
  return p1 * p2;
};
console.log(`The result will be: ${result2(2, 3)}`);
console.log(total);

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

for (const tag of tags) {
  console.log(tag); // of means elements
}
for (const tag in tags) {
  console.log(tag); // in means index
}

let digit = 999999999999999;
console.log(digit.toString().length); //
console.log(digit);
let digit1 = 9999999999999999;
console.log(digit1.toString().length);
console.log(digit1);

let floating = 0.2 + 0.1;
console.log(floating);

let s = (0.2 * 10 + 0.1 * 10) / 10;
console.log(s);

let test = 10;
let test2 = 20;
let test3 = "30";

console.log("The result is ", test3 + test2 + test);
console.log("The result is ", test + test2 + test3);
console.log(test3 / test);
console.log(test3 - test2);
console.log(test3 * test);
console.log(typeof (test3 + test2));

let x1 = NaN;
console.log(typeof x1);
let y = "5";
let z1 = x1 + y;
console.log(z1);

let myNumber = 320;
console.log("Hexadecimal", myNumber.toString(16));
console.log("Decimal", myNumber.toString(10));
console.log("Octal", myNumber.toString(8));
console.log("Binary", myNumber.toString(2));

// Number method
console.log(Number(true));
console.log(Number(false));
console.log(Number("       10"));
console.log(Number("  120   "));
console.log(Number("10212.23"));
console.log(Number("102, 23"));
console.log(Number("102 23"));
console.log(Number("Raihan"));

console.log(new Date());
console.log(Number(new Date()));

// Perse Integer
console.log(parseFloat("-19"));
console.log(parseInt("-10.33"));
console.log(parseFloat("10"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

console.log("Float: ", typeof parseFloat("3"));
console.log(parseFloat(12).toFixed(2));
console.log("Int: ", parseInt(3.22));

// accessing the last array index
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const lastArray = fruits[fruits.length - 1];
console.log(fruits[2]);
console.log(lastArray);

for (const fruit in fruits) {
  console.log(`Fruits index no ${fruit}`);
}

for (const fruit of fruits) {
  console.log(`The Fruit name is ${fruit}`);
}

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element);
}

for (let fruit of fruits) {
  console.log(fruit);
}

const array = [40, 20];
const array1 = new Array(40, 20);
console.log(array);
console.log(array1);
console.log(fruits.toString());
console.log(fruits.join(" | "));

console.log(fruits.sort());
console.log(fruits.reverse());

const points = [40, 100, 1, 5, 25, 10, 23, 12, 3, 12, 53, 324, 234, 234];

const sorted = points.sort(function (a, b) {
  return a - b;
});
console.log(sorted);

const reversed = points.sort(function (a, b) {
  return b - a;
});

console.log(reversed);

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

const sortedCars = cars.sort(function (a, b) {
  return a.year - b.year;
});

console.log(sortedCars);

const sortedCar = cars.sort(function (a, b) {
  let x = a.type.toLocaleLowerCase();
  let y = b.type.toLocaleLowerCase();

  if (x > y) {
    return 1;
  }

  if (x < y) {
    return -1;
  }
  return 0;
});

console.log(sortedCar);

// console.log(Math.floor(Math.random() * 10) + 1);

function getRandomInteger(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInteger(0, 10));

switch (new Date().getDay()) {
  case 0:
    console.log((day = "Sunday"));
    break;
  case 1:
    console.log((day = "Monday"));
    break;
  case 2:
    console.log((day = "Tuesday"));
    break;
  case 3:
    console.log((day = "Wednesday"));
    break;
  case 4:
    console.log((day = "Thursday"));
    break;
  case 5:
    console.log((day = "Friday"));
    break;
  case 6:
    console.log((day = "Saturday"));
}

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  myFunction: function () {
    return this;
  },
};

console.log(person2.myFunction());

const person3 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const another = {
  firstName: "Abu",
  lastName: "Raihan",
};
let fullName = person3.fullName.apply(another);

console.log(fullName);

let hello = "";
hello = (val) => {
  "Hello" + val;
};

let ss = "helo";
ss = 5;

console.log(ss);
console.log(typeof ss);

let xs = "hello";

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.slice(0, 1));
