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

function sameFrequency(num1, num2) {
  console.log(num1, num2);
  const total1 = num1
    .toString()
    .split("")
    .reduce((prev, cur, index) => Number(prev) + Number(cur));
  const total2 = num2
    .toString()
    .split("")
    .reduce((prev, cur, index) => Number(prev) + Number(cur));
  return total1 === total2;
  // return total1 == total2;
}

const result = sameFrequency(22, 222);

console.log(result);
