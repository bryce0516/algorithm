function solution(n) {
  let first = Infinity;
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      first = Math.min(first, i);
    }
  }

  return first;
}

const result = solution(12);
