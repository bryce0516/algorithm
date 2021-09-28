function solution(arr) {
  const answer = arr.reduce((acc, cur) => {
    let min = Math.min(acc, cur);
    let max = Math.max(acc, cur);
    const gcd = (min, max) => {
      return min % max === 0 ? max : gcd(max, min % max);
    };

    const lcm = (min, max) => {
      return (min * max) / gcd(min, max);
    };
    acc = lcm(min, max);
    return acc;
  }, 1);

  return answer;
}

solution([2, 6, 8, 14]);
