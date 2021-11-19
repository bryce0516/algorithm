// var hammingDistance = function (x, y) {
//   const high = Math.max(x, y);
//   const low = high === x ? y.toString(2) : x.toString(2);
//   const highArr = high.toString(2).split("");
//   let answer = 0;
//   console.log(highArr, low.split(""), typeof low);

//   //pass but too slow
//   // const lowArr = Array.from({ length: highArr.length }, (_, i) => {
//   //   if (highArr.length !== low.length) {
//   //     let j = i;
//   //     i = i - highArr.length + low.length;
//   //     console.log(low[i], highArr[j]);
//   //     if (low[i] !== highArr[j]) answer += 1;
//   //     if (low[i] === undefined) {
//   //       return "0";
//   //     } else {
//   //       return low[i];
//   //     }
//   //   } else {
//   //     if (low[i] !== highArr[i]) answer += 1;
//   //     return low[i];
//   //   }
//   // });
//   return answer;
// };

var hammingDistance = function (x, y) {
  const high = Math.max(x, y);
  const low = high === x ? y.toString(2) : x.toString(2);
  const highArr = high.toString(2);
  let answer = 0;
  for (
    let i = 0,
      j = highArr.length !== low.length ? i - (highArr.length - low.length) : i;
    i < highArr.length;
    i++, j++
  ) {
    if (low[j] !== highArr[i]) {
      if (low[j] === undefined && highArr[i] === "0") {
      } else {
        answer += 1;
      }
    }
  }
  return answer;
};
const value = hammingDistance(1, 3);

console.log(value);
