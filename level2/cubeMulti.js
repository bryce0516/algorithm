// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.map((element1, index1) => {
//     let mock = [];
//     arr2.map((element2, index2) => {
//       let result = element2.reduce((acc, cur, index3) => {
//         acc += arr1[index1][index3] * arr2[index3][index2];
//         // console.log(index1, index2, index3);
//         console.log(index1, index3, " =========", index3, index2);
//         return acc;
//       }, 0);

//       mock.push(result);
//     });
//     answer.push(mock);
//   });
//   console.log(answer);
//   return answer;
// }

// function solution(arr1, arr2) {
//   var answer = [];
//   var sum = 0;
//   var temp = [];
//   for (var i = 0; i < arr1.length; i++) {
//     for (var k = 0; k < arr2[0].length; k++) {
//       for (var j = 0; j < arr2.length; j++) {
//         sum = sum + arr1[i][j] * arr2[j][k];
//       }
//       temp.push(sum);
//       sum = 0;
//     }
//     answer.push(temp);
//     temp = [];
//   }
//   console.log(answer);
//   return answer;
// }

function solution(arr1, arr2) {
  var answer = [];

  arr1.map((element, index1) => {
    let mock = [];
    arr2[0].map((element2, index2) => {
      const result = arr2.reduce((acc, cur, index3) => {
        acc += arr1[index1][index3] * arr2[index3][index2];
        return acc;
      }, 0);
      mock.push(result);
    });
    answer.push(mock);
  });
  // var sum = 0;
  // var temp = [];
  // for (var i = 0; i < arr1.length; i++) {
  //   for (var k = 0; k < arr2[0].length; k++) {
  //     for (var j = 0; j < arr2.length; j++) {
  //       sum = sum + arr1[i][j] * arr2[j][k];
  //     }
  //     temp.push(sum);
  //     sum = 0;
  //   }
  //   answer.push(temp);
  //   temp = [];
  // }
  console.log(answer);
  return answer;
}

// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.map((element1, index1) => {
//     if (index1 >= 1) {
//       return;
//     }
//     element1.map((innerElement1, innerIndex1) => {
//       let mock = [];
//       arr2.map((element2, index2) => {
//         const reud = element2.reduce((acc, cur, innerIndex2) => {
//           const result =
//             arr1[innerIndex1][innerIndex2] * arr2[innerIndex2][index2];
//           // console.log(index1, innerIndex1);
//           // console.log(
//           //   `[${innerIndex1}, ${innerIndex2}]`,
//           //   `[${innerIndex2}, ${index2}]`,
//           //   result
//           // );
//           acc += result;
//           return acc;
//         }, 0);
//         // console.log(reud);
//         mock.push(reud);
//         // console.log(mock);
//       });

//       answer.push(mock);
//     });
//   });

//   console.log(answer);
//   return answer;
// }

solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
