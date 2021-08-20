// function solution(input, startNum) {
//   if (startNum === 10000) {
//     return -1;
//   }
//   if (startNum * startNum !== input) {
//     return solution(input, startNum + 1);
//   } else if (startNum * startNum === input) {
//     return startNum;
//     // return (startNum + 1) ** 2;
//   } else {
//     return -1;
//   }
// }

function solution(input) {
  const result = Math.sqrt(input);
  if (Number.isInteger(result)) {
    return (result + 1) ** 2;
  } else {
    return -1;
  }
}

const value = solution(144);
console.log(value);
