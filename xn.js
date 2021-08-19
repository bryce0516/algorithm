function solution(x, n) {
  var answer = [];
  for (let i = 1; i < n + 1; i++) {
    let y = i * x;
    answer.push(y);
  }

  return answer;
}

solution(-4, 2);

function solution2(x, n) {
  const arr = Array(n)
    .fill(x)
    .map((e, i) => (i + 1) * e);
  console.log(arr);
  return arr;
}

solution2(2, 5);
