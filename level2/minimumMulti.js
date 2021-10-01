function solution(a, b) {
  function compare(a, b) {
    return a - b;
  }
  const sortedA = a.sort(compare);
  const sortedB = b.sort(compare);

  const answer = sortedA.reduce((acc, cur, index) => {
    acc += cur * sortedB[b.length - index - 1];
    return acc;
  }, 0);

  return answer;
}

solution([1, 2], [3, 4]);
