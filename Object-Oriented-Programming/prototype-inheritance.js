/**
 * Title: Prototype inheritance
 */

function Person() {
  this.name = "Abu Raihan";
}
function Teacher() {
  Person.call(this);
  console.log(Person.call(this));
  this.subject = "JavaScript";
}
var teacher = new Person();
var name = teacher.name;
console.log(name);
Teacher();
 