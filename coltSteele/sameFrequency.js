// function sameFrequency(num1, num2) {
//   console.log("thisi s num", num1, num2);
//   let total1 = [...(num1 + "")]
//     .map((n) => +n)
//     .reduce((prev, cur) => prev + cur, 0);
//   let total2 = [...(num2 + "")]
//     .map((n) => +n)
//     .reduce((prev, cur) => prev + cur, 0);
//   console.log(total1, total2);
//   return total1 == total2;
// }

// function sameFrequency(num1, num2) {
//   console.log(num1, num2);
//   const total1 = num1
//     .toString()
//     .split("")
//     .reduce((prev, cur, index) => Number(prev) + Number(cur));
//   const total2 = num2
//     .toString()
//     .split("")
//     .reduce((prev, cur, index) => Number(prev) + Number(cur));
//   return total1 === total2;
//   // return total1 == total2;
// }
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }
  console.log("thisis 1", countNum1);

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }
  console.log("thisis 2", countNum2);

  for (let key in countNum1) {
    console.log("result", countNum1[key], countNum2[key]);
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
const result = sameFrequency(2222233, 2222233);

console.log(result);
