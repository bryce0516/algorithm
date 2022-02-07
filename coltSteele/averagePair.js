// function averagePair() {
//   const input1 = arguments["0"];
//   const input2 = arguments["1"] * 2;

//   if (input1.length === 0) return false;
//   for (let i = 0; i < input1.length; i++) {
//     const target = input2 - input1[i];
//     for (let j = i; j < input1.length; j++) {
//       if (target === input1[j]) {
//         return true;
//       }
//     }
//   }

//   return false;

//   // add whatever parameters you deem necessary - good luck!
// }

//others solution
function averagePair() {
  const input1 = arguments["0"];
  const input2 = arguments["1"];
  console.log(input1, input2);

  let left = 0;
  let right = input1.length - 1;
  while (left < right) {
    console.log(left, right);
    const math = (input1[left] + input1[right]) / 2;
    if (math === input2) {
      return true;
    } else if (math > input2) {
      right--;
    } else {
      left++;
    }
  }
}
const result = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

console.log(result);
