// function solution(n, s = 1, g = 0) {
//   if (s === n + 1) {
//     return g;
//   }
//   if (n % s === 0) {
//     g += s;
//   }
//   console.log(s, n % s === 0, g);
//   var answer = 0;
//   return solution(n, s + 1, g);
// }

function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}
const value = solution(12);
console.log(value);
