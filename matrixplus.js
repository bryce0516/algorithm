// function solution(arr1, arr2) {
//   const leng = arr1[0].length;
//   const flat1 = arr1.flat();
//   const flat2 = arr2.flat();
//   const answer = [];
//   let mock = [];
//   for (let i = 1; i < flat1.length + 1; i++) {
//     for (let j = 1; j < flat2.length + 1; j++) {
//       if (i === j) {
//         const value = flat1[i - 1] + flat2[j - 1];
//         mock.push(value);

//         if (leng === 1) {
//           answer.push(mock);
//           mock = [];
//         } else if (j % leng === 0) {
//           answer.push(mock);
//           mock = [];
//         }
//       }
//     }
//   }

//   return answer;
// }
// function solution(arr1, arr2) {
//   var answer = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let temp = [];
//     for (let j = 0; j < arr1[i].length; j++) {
//       console.log(i, j);
//       temp.push(arr1[i][j] + arr2[i][j]);
//     }
//     answer.push(temp);
//   }
//   return answer;
// }

function solution(arr1, arr2) {
  const solution = arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
  console.log(solution);
}
const question1 = [
  [1, 2],
  [2, 3],
];
const question2 = [
  [3, 4],
  [5, 6],
];

// const question1 = [[1], [2]];
// const question2 = [[3], [4]];

solution(question1, question2);
