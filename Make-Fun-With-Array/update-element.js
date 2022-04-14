const student = [
  { id: 1, name: "Raihan" },
  { id: 2, name: "Sumaiya" },
  { id: 3, name: "Sara" },
  { id: 4, name: "Mujahid" },
];
const givenName = 2;
const updateName = "Sumaiya Afrin";

for (let i = 0; i < student.length; i++) {
  if (givenName === student[i].id) {
    student[i].name = updateName;
    break;
  }
}
console.log(student);
