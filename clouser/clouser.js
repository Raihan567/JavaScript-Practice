var sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4));
// console.dir(sum)

function bankAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
}
var account = bankAccount(1000000);
console.dir(account);

/**
 *
 * @returns Closure function
 */
function stopWatch() {
  var startTime = Date.now();
  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}
var timer = stopWatch();
for (var i = 0; i < 1000000; i++) {
  var a = Math.random() * 10000;
}

console.dir(timer);
