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
//   return re;
// };
//heap memory overflow
// var countBits = function (n) {
//   const initialValue = Math.floor(Math.sqrt(n + 1));
//   console.log("initialValue,", initialValue);
//   let before = [1];
//   let current = [1];
//   for (let i = 0; i <= initialValue; i++) {
//     const targetPlus = before.map((element) => element + 1);
//     const target = [...before, ...targetPlus];
//     before = target;
//     current = [...current, ...target];
//     // current = [...before, target];
//     // console.log(i, before, current);
//   }
//   current = [0, ...current];
//   const answer = current.slice(0, n + 1);
//   return answer;
// };
// var countBits = function (n) {
//   const makeArray = Array.from({ length: n + 1 }, (_, i) => i);
//   for (let x = 1; x <= n; ++x) {
//     makeArray[x] = makeArray[x & (x - 1)] + 1;
//   }
//   return makeArray

// };

var countBits = function (n) {
  let ans = new Array(n + 1);
  ans[0] = 0;
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i;
    ans[i] = 1 + ans[i - offset];
  }
  return ans;
};

countBits(5);
