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
  console.log("this is initial", initialValue);

  const before = [1];
  const current = [1];

  for (let i = 0; i <= initialValue; i++) {
    const target = before.map((element) => element + 1);

    current = [...before, target];
    console.log(target, current);
    console.log(i);
  }
};

countBits(2);
