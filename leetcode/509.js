/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n, memo = {}) {
  // if (memo[n]) return memo[n];
  // if (n === 1) return 1;
  // if (n === 0) return 0;
  // memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  // return memo[n];
};

var fib = function (n) {
  let f = [];
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; ++i) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
};

const value = fib(6);
console.log(value);
