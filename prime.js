// function solution(n) {
//   let arr = [];
//   for (let i = 1; i < n + 1; i++) {
//     const jurge = isPrime(i);
//     if (jurge) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
//   // return answer;
//   function isPrime(n) {
//     if (n <= 1) {
//       return false;
//     }
//     if (n === 2 || n === 3) {
//       return true;
//     }
//     if (n % 2 === 0) {
//       return false;
//     }
//     let divisor = 3;
//     let limit = Math.sqrt(n);

//     while (limit >= divisor) {
//       if (n % divisor === 0) {
//         return false;
//       }
//       divisor += 2;
//     }
//     return true;
//   }
//   return arr.length;
// }

function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

solution(20);
