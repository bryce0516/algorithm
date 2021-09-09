// function solution(numbers) {
//   let mock = [];
//   let realMock = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       let chk = true;
//       for (let k = 0; k < mock.length; k++) {
//         if (JSON.stringify(mock[k]) === JSON.stringify([i, j].sort())) {
//           chk = false;
//         }
//       }
//       if (i === j) {
//         chk = false;
//       }
//       if (chk) {
//         mock.push([i, j].sort());
//         realMock.push(numbers[i] + numbers[j]);
//       }
//     }
//   }
//   const answer = Array.from(new Set(realMock));

//   // let answer = [];
//   // for (let i = 0; i < realMock.length; i++) {
//   //   let chk = true;
//   //   for (let j = 0; j < answer.length; j++) {
//   //     if (JSON.stringify(realMock[i]) === JSON.stringify(answer[j])) {
//   //       chk = false;
//   //     }
//   //   }
//   //   if (chk) {
//   //     answer.push(realMock[i]);
//   //   }
//   // }

//   // console.log(set);
//   const sortByAsc = (a, b) => {
//     return a - b;
//   };
//   answer.sort(sortByAsc);

//   return answer;
// }

function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      // console.log(sum);
      if (result.indexOf(sum) < 0) {
        result.push(sum);
      }
    }
  }

  result.sort((a, b) => a - b);
  return result;
}

const value = solution([5, 0, 2, 7]);
console.log(value);
