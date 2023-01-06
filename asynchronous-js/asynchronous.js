/**
 * Title: Asynchronous Programming
 */
const processOrder = (customer) => {
  console.log("Process order for customer 1");

  setTimeout(() => {
    console.log(`Cooking complete`);
  }, 3000);

  console.log("Order process for customer 1");
};

console.log("take order for customer 1");
processOrder();
console.log(`Complete order for customer 1`);
