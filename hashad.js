// function solution(x) {
//   const splited = x.toString().split("");
//   let all = 0;
//   splited.map((element, index) => (all += Number(element)));
//   var answer = true;
//   if (x % all === 0) {
//     answer = true;
//   } else {
//     answer = false;
//   }
//   console.log(splited, all);

//   return answer;
// }

function solution(x) {
  const value = x
    .toString()
    .split("")
    .map((a) => Number(a));

  const reducer = (a, b) => {
    console.log(a, b);
    return a + b;
  };
  const change = value.reduce(reducer);
  console.log(change);
  var answer;
  return answer;
}

solution(18);
