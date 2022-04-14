const Stack = require("./stack");
const stack = new Stack();
const text = "HELLO";

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i));
}

let reverseText = "";
while (!stack.isEmpty()) {
  reverseText += stack.pop();
}
console.log(reverseText);

const text1 = "HELLO2";
const jsStack = [];
for (let i = 0; i < text1.length; i++) {
  jsStack.push(text1.charAt(i));
}

let result1 = "";
while (jsStack.length) result1 += jsStack.pop();
console.log(result1);
