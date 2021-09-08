// function solution(arr) {
//   var answer;
//   if (arr.length <= 1) {
//     return (answer = [-1]);
//   }

//   const sor = arr.sort((a, b) => {
//     return b - a;
//   });
//   sor.pop();

//   answer = sor;

//   return answer;
// }

function solution(arr) {
  if (arr.length <= 1) return [-1];
  const min = arr.reduce((first, next, index) => {
    return first > next ? next : first;
  });

  return arr.filter((e) => e !== min);
}

const value = solution([-1, -2, -3, -4, 1]);
console.log(value);
