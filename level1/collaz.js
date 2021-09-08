// function solution(num, times) {
//   if (times === 500) return -1;
//   if (num === 1) return times;

//   let isEven = true;
//   if (num % 2) {
//     isEven = false;
//   }

//   num = isEven ? num / 2 : num * 3 + 1;
//   console.log(num, times);

//   var answer = times;

//   return solution(num, times + 1);
// }

function solution(num, times = 0) {
  return num == 1
    ? times >= 500
      ? -1
      : times
    : solution(num % 2 === 0 ? num / 2 : num * 3 + 1, ++times);
}

const value = solution(6, 0);

console.log(value);
