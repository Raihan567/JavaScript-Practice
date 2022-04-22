/**
 * Title: Callback
 * Most important of Functional that is Callback function
 */

// function hello(name) {
//   print(name);
//   print("Something is else");
// }

// function print(args) {
//   console.log(args);
// }

// hello("Twinkle cats");

function hello(name, print) {
  print(name);
}

// hello("Abu Raihan", function (name) {
//   console.log("Hello,", name + " " + "how are you?:");
// });

// hello("[Hello, Bangladesh]", function (name) {
//   console.log(`Length of ${name} is ${name.length}`);
// });

let me = {
  name: "Abu Raihan",
  age: 19,
  skills: ["Html", "Css", "JS"],
  email: "aburaihansarker567@gmail.com",
};
function mySelf(person, callback) {
  console.log(
    `Person: ${person.name} (${person.age}) skills: ${person.skills}`
  );
  if (person.age >= 18) {
    callback(person.email);
  } else {
    console.log(`You ara so small...`);
  }
}

mySelf(me, function (email) {
  console.log(`Sent email at ${email}`);
});

// function message(data, callback1, callback2) {
//   console.log(`Original data: ${data}`);
//   callback1(data);
//   callback2(data);
// }

// message(
//   "Stack learner is my one of the favorite youtube channel for learn programming",
//   function (data) {
//     let data1 = data.toUpperCase();
//     console.log(`Uppercase: ${data1}`);
//   },
//   function (data) {
//     let data2 = data.toLowerCase();
//     console.log(`Lowercase: ${data2}`);
//     console.log(`Length: ${data.length}`);
//   }
// );

function message(data, cb1, cb2) {
  console.log(`Original data: ${data}`);
  cb1(data);
  cb2(data);
}
message(
  "Stack learner is my favorite channel",
  function (data) {
    let data1 = data.toUpperCase();
    console.log(`UpperCase: ${data1}`);
  },
  function (data) {
    let data2 = data.toLowerCase();
    console.log(`LowerCase: ${data2}`);
    console.log(`Length: ${data.length}`); 
  }
);
