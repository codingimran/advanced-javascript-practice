class Students {
  constructor(sroll, sname) {
    this.id = sroll;
    this.name = sname;
  }
}

const student = [
  new Students(1, "Imran Khan"),
  new Students(2, "Sojib Khan"),
  new Students(3, "Sobuj Khan"),
  new Students(71, "GangStar"),
];
// console.log(student);

const studentName = [];
for (let i = 0; i < student.length; i++) {
  const element = student[i];
  studentName.push(element.name);
}
console.log(studentName);

const names = student.map((student) => student.name);
const ids = student.map((student) => student.id);
const idsFilter = student.filter((student) => student.id > 40);
const idsFind = student.find((student) => student.id > 40);
console.log(`Name: ${names}
Roll: ${ids}`);
console.log(idsFilter);
console.log(idsFind);
