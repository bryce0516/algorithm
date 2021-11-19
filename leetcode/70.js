// var climbStairs = function (n) {
//timeout
// if (n <= 0) return 0;
// if (n === 1) return 1;
// if (n === 2) return 2;

// return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// };

//pass
// var climbStairs = function (n, memo = {}) {
//   if (n in memo) {
//     return memo[n];
//   }
//   console.log(memo);
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   return memo[n];
// };

// var climbStairs = function (n, memo = {}) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   let first = 1;
//   let second = 2;

//   for (let i = 3; i <= n; i++) {
//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   return second;
// };

var climbStairs = function (n, memo = {}) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
