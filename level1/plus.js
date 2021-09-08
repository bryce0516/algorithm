function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);

  return answer;
}

const value = solution(0);
console.log(value);
