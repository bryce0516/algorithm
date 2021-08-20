function solution(n) {
  const newArr = n.toString().split("").sort(compare);
  function compare(a, b) {
    return b - a;
  }
  // const redu = newArr.reduce(reducer);
  const re = newArr.join("");

  var answer = Number(re);
  return answer;
}

solution(118372);
