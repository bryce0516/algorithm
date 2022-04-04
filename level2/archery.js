function solution(n, info) {
  point = { 10: 0, 9: 0, 8: 0, 7: 0, 6: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0, 0: 0 };
  let apeachPoint = 0;
  for (let i = 10; i >= 0; i--) {
    let infoIndex = info.length - i - 1;
    point[i] = info[infoIndex];
    if (info[infoIndex] !== 0) {
      apeachPoint += i;
    }
  }
  const dp = (point, chosenCount, score) => {
    console.log(point, chosenCount);
    if (n - chosenCount > 0) {
      for (let i = point - 1; i >= 0; i--) {
        console.log("this is inner i ", i);
      }
    }
    // for (let i = 10; i >= 0; i--) {

    // }
  };
  for (let i = 10; i >= 9; i--) {
    console.log("i", i, point[i]);
    dp(i, point[i], 0);
  }
  console.log(apeachPoint);
  // console.log("this is ", point);
  for (const [key, value] of Object.entries(point)) {
    // console.log(key, value);
  }

  var answer = [];
  return answer;
}

// function solution(n, info) {
//   let result = Array.from({ length: 11 }, () => 0);
//   let max = 0;
//   function shot(peachScore, ryanScore, count, index, scoreBoard) {
//     console.log(
//       "peachScore, ryanScore, count, index, scoreBoard",

//       scoreBoard
//     );
//     if (n < count) return;
//     if (index > 10) {
//       let scoreDiff = ryanScore - peachScore;
//       if (max < scoreDiff) {
//         scoreBoard[10] = n - count;
//         max = scoreDiff;
//         result = scoreBoard;
//       }
//       return;
//     }

//     if (n > count) {
//       let candidate = [...scoreBoard];
//       candidate[10 - index] = info[10 - index] + 1;
//       shot(
//         peachScore,
//         ryanScore + index,
//         count + info[10 - index] + 1,
//         index + 1,
//         candidate
//       );
//     }

//     if (info[10 - index] > 0) {
//       shot(peachScore + index, ryanScore, count, index + 1, scoreBoard);
//     } else {
//       shot(peachScore, ryanScore, count, index + 1, scoreBoard);
//     }
//   }

//   shot(0, 0, 0, 0, result);
//   console.log("this is result", result);
//   return result;
// }

const result = solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
