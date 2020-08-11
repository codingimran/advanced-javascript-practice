// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = nums.slice(3, 5);
// const removed = nums.splice(2, 5, 0, 0, 0, 0);
// // console.log(part);
// // console.log(removed);
// // console.log(nums);

// const together = nums.join(" + ");
// console.log(together);

const myNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = myNumber.slice(1, 3);
const joint = part.join(` 
`);
console.log(part);
console.log(joint);

const removed = myNumber.splice(0, 5);
// console.log(removed);
// console.log(myNumber);
const myArray = [];
const joint2 = myNumber.join(`${myNumber} + ${removed} = `);
console.log(joint2);
