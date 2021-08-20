function solution(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  const gcd = (min, max) => {
    return min % max === 0 ? max : gcd(max, min % max);
  };
  const lcm = (min, max) => {
    return (min * max) / gcd(min, max);
  };

  var answer = [gcd(min, max), lcm(min, max)];
  console.log(answer);
  return answer;
}

solution(4, 6);
