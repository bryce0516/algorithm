function solution(board, moves) {
  let mock = [];
  let answer = 0;

  const recursive = (pickedArr, pickDoll) => {
    let index = 0;
    while (pickDoll.length !== 0) {
      if (pickedArr[index][pickDoll] !== 0) {
        // console.log(
        //   mock[mock.length - 1],
        //   pickedArr[index][pickDoll],
        //   mock[mock.length - 1] === pickedArr[index][pickDoll]
        // );
        if (mock[mock.length - 1] === pickedArr[index][pickDoll]) {
          mock.pop();
          pickedArr[index][pickDoll] = 0;
          answer += 2;
          break;
        }
        mock.push(pickedArr[index][pickDoll]);
        pickedArr[index][pickDoll] = 0;
        // console.log(pickedArr, "=========>", mock);
        break;
      }

      index += 1;

      if (index > pickedArr.length - 1) {
        // console.log("end");
        break;
      }
    }
  };

  moves.map((element, index) => {
    recursive(board, element - 1);
  });
  // console.log(answer);
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

// const transpose = (matrix) =>
//   matrix.reduce(
//     (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
//     []
//   );

// const solution = (board, moves) => {
//   const stacks = transpose(board).map((row) =>
//     row.reverse().filter((el) => el !== 0)
//   );
//   const basket = [];
//   let result = 0;

//   for (const move of moves) {
//     const pop = stacks[move - 1].pop();
//     if (!pop) continue;
//     if (pop === basket[basket.length - 1]) {
//       basket.pop();
//       result += 2;
//       continue;
//     }
//     basket.push(pop);
//   }

//   return result;
// };
