// function solution(sizes) {
//   const max = sizes.flat().reduce((acc, cur) => {
//     return acc > cur ? acc : cur;
//   });

//   const mapV = sizes
//     .map((element) => {
//       const vl = element.reduce((acc, cur) => {
//         return acc < cur ? acc : cur;
//       });
//       return (element = vl);
//     })
//     .sort((a, b) => b - a);
//   const answer = mapV[0] * max;

//   return answer;
// }

function solution(sizes) {
  // const [hor, ver] = sizes;
  // const value = sizes.reduce(
  //   ([h, v], [a, b]) => [
  //     Math.max(h, Math.max(a, b)),
  //     Math.max(v, Math.min(a, b)),
  //   ],
  //   [0, 0]
  // );

  const vl = sizes.reduce(
    (acc, cur) => {
      console.log(acc, cur);
    },
    [0, 0]
  );
  // console.log(value);
  // return hor * ver;
}
solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);
