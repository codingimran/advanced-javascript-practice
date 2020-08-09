let bonus = 40;
const sum = (first, second = 0) => {
  let result = first + second + bonus;
  var happy = `I am ${result > 9 ? "Happy" : "Unhappy"}`;
  console.log(happy);
  return result;
};

const output = sum(1, 7);
console.log(output);
// console.log(happy);

let num = 100;
if (num > 100) {
  var mood;
  mood = "I am happy";
} else {
  mood = "I am unHappy";
}

console.log(mood);
