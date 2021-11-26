// stackoverflow
// var countBits = function (n) {
//   const initialValue = Math.floor(Math.sqrt(n + 1));
//   console.log("this is initial", initialValue);

//   const memo = { 0: [1] };
//   const makeArray = (res, memo) => {
//     if (memo[res]) {
//       return memo[res];
//     }
//     const before = memo[res - 1];
//     const after = memo[res - 1].map((element) => element + 1);
//     memo[res] = [...before, ...after];
//   };

//   for (let i = 0; i <= initialValue; i++) {
//     makeArray(i, memo);
//   }

//   console.log(memo);
//   let answer = [0];
//   for (const [key, value] of Object.entries(memo)) {
//     answer = [...answer, ...value];
//   }
//   const re = answer.slice(0, n + 1);
//   return re
// };
var countBits = function (n) {
  const initialValue = Math.floor(Math.sqrt(n + 1));
  console.log("initialValue", initialValue);
  let beforeData = [1];
  let current = [1];
  for (let i = 1; i <= initialValue; i++) {
    const target = beforeData.map((element) => element + 1);
    beforeData = current;
    console.log("target, beforeData", target, beforeData);
    current = [...beforeData, ...target];
    console.log(current);
  }
};
countBits(3);
