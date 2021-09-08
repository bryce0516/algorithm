function solution(scores) {
  let arr = [];
  for (let k = 0; k < scores.length; k++) {
    let mock = [];
    let standard = 0;

    for (let i = 0; i < scores.length; i++) {
      if (i === k) {
        standard = Number(scores[i][k]);
      }
      mock.push(Number(scores[i][k]));
    }

    const max = mock.reduce((acc, cur) => {
      return acc > cur ? acc : cur;
    });
    const min = mock.reduce((acc, cur) => {
      return acc < cur ? acc : cur;
    });

    if (max === standard || min === standard) {
      const many = mock.filter((element) => element === standard);
      if (many.length === 1) {
        mock = mock.filter((element) => element !== standard);
      }
    }
    const average =
      mock.reduce((acc, cur) => {
        acc += cur;
        return acc;
      }) / mock.length;
    const finalResult =
      average >= 90
        ? "A"
        : average >= 80 && average < 90
        ? "B"
        : average >= 70 && average < 80
        ? "C"
        : average >= 50 && average < 70
        ? "D"
        : "F";
    arr.push(finalResult);
  }

  var answer = arr.join("");
  return answer;
}

solution([
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
]);

// let solution = (scores) =>
//   scores[0]
//     .map((_, c) => scores.map((r) => r[c]))
//     .map((s, i) => [...s.splice(i, 1), s])
//     .map(([m, s]) =>
//       Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s
//     )
//     .map(
//       (s) =>
//         "FDDCBAA"[
//           Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)
//         ]
//     )
//     .join("");
