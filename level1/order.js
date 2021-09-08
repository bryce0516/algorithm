// function solution(n) {
//   const newArr = n.toString().split("").sort(compare);
//   function compare(a, b) {
//     return b - a;
//   }
//   // const redu = newArr.reduce(reducer);
//   const re = newArr.join("");

//   var answer = Number(re);
//   return answer;
// }

function solution(n) {
  let isPositive = true;
  if (n < 0) {
    n = Math.abs(n);
    isPositive = false;
  }
  const newArr = isPositive
    ? n.toString().split("").reverse()
    : n
        .toString()
        .split("")
        .map((e) => {
          return `-${e}`;
        })
        .reverse();

  // const redu = newArr.reduce(reducer);
  const map1 = newArr.map((element) => Number(element));

  var answer = map1;
  return answer;
}
const d = solution(-123123);

// console.log(d);
