/**
 * Title: Return Statement
 */
function name(firstName, lastName, gender) {
  var output;
  if (gender === "male") {
    output = "Mr. " + firstName + " " + lastName;
  } else if (gender === " female") {
    output = "Mrs. " + firstName + " " + lastName;
  }
  return output;
}

let result1 = name("Abu", "Raihan", "male");
let result2 = name("Sumaiya", "Afrin", "female");
console.log(result1);
console.log(result2);

function example() {
  return {
    name: "Abu Raihan",
    skills: "JavaScript",
    print: function () {
      console.log(this.name, this.skills);
    },
  };
}

let obj = example();
obj.print();
