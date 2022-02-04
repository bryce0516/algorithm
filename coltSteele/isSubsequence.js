// function isSubsequence() {
//   const input1 = arguments["0"];
//   const input2 = arguments["1"];

//   if (input1.length > input2.length) return false;
//   let left = 0;
//   let right = 0;
//   let rightCorrection = 0;
//   while (right < input2.length) {
//     if (input1[left] === input2[right]) {
//       left++;
//       rightCorrection++;
//     }
//     if (input1.length === rightCorrection) return true;
//     right++;
//   }
//   return false;
//   // good luck. Add any arguments you deem necessary.
// }

function isSubsequence(input1, input2) {
  if (input1.length === 0) return true;
  if (input2.length === 0) return false;
  if (input1[0] === input2[0]) {
    return isSubsequence(input1.slice(1), input2.slice(1));
  }
  return isSubsequence(input1, input2.slice(1));
}
const result = isSubsequence("abs", "acb");

console.log(result);
