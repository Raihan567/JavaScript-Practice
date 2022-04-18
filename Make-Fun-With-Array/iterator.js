const arr = ["a", "b", "c", "d"];
const iArr = arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
