function solution(arr) {
  const reduce = arr.reduce((prev, current, index) => {
    return (prev *= current);
  });
  return reduce;
}

const result = solution([1, 2, 3, 10]);
