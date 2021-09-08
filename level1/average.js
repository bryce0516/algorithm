// function solution(arr) {
//   var answer = 0;
//   const value = arr.map((element) => {
//     answer += element;
//   });
//   answer = answer / arr.length;
//   console.log(answer);
//   return answer;
// }

function solution(arr) {
  const reducer = (acc, current) => {
    return acc + current;
  };
  const value = arr.reduce(reducer) / arr.length;
  console.log(value);
}

solution([2, 4, 6, 8, 10]);
