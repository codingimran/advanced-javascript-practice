const numbers = [2, 3, 4, 5, 6, 7, 8];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   const result = number * number;
//   output.push(result);
// }
// console.log(output);

// const result = numbers.map((element) => {
//   return element * element;
// });
// const result = numbers.map((x) => x * x);

const result = numbers.filter((x) => x < 5);
const resultFind = numbers.find((x) => x > 5);
console.log(resultFind);
