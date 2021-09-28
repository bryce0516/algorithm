function solution(arr) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  const gcd = (min, max) => {
    return min % max === 0 ? max : gcd(max, min % max);
  };
  const lcm = (min, max) => {
    return (min * max) / gcd(min, max);
  };
  arr.reduce((acc, cur) => {});

  var answer = 0;
  return answer;
}

solution([2, 6, 8, 14]);
