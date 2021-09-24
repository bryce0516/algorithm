function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    const value = a[i] * b[i];
    answer += value;
  }

  return answer;
}

const value = solution([1, 2, 3, 4], [-3, -1, 0, 2]);

console.log(value);
