// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.map((element1, index1) => {
//     let mock = [];
//     arr2.map((element2, index2) => {
//       let result = element2.reduce((acc, cur, index3) => {
//         console.log(`[${index2}, ${index3}]`, `[${index3}, ${index2}]`);
//         acc += arr1[index2][index3] * arr2[index3][index2];
//         return acc;
//       }, 0);

//       mock.push(result);
//       console.log(result);
//     });
//     answer.push(mock);
//   });
//   console.log(answer);
//   return answer;
// }

function solution(arr1, arr2) {
  let answer = [];
  arr1.map((element1, index1) => {
    element1.map((innerElement1, innerIndex1) => {
      arr2.map((element2, index2) => {
        element2.map((innerElement2, innerIndex2) => {
          console.log(`[${innerIndex1}, ${innerIndex2}]`);
        });
      });
    });
  });
  console.log(answer);
  return answer;
}

solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);
