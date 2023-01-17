var javascript = {
  name: "javascript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries() {
    this.libraries.forEach((a) => {
      console.log(`${this.name} loves ${a}`);
    });
  },
};
javascript.printLibraries();

// Truthy falsy value; ==> false , 0, empty string, undefined, null, NaN
var myVar = "";
if (myVar) {
  console.log(`I am truthy`);
} else {
  console.log(`I am falsy`);
}

// ternary operator
var age = 16;
var type = age >= 18 ? "Adult" : age <= 10 ? "Child" : "Young"; 
console.log(type);

if (age >= 18) {
  type = "Adult";
} else if (age <= 10) {
  type = "Child";
} else {
  type = "Young";
}
console.log(type);
