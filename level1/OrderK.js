function solution(array, commands) {
  const result = commands.reduce((acc, cur, index) => {
    const start = cur[0];
    const end = cur[1];
    const k = cur[2];
    const result = array.slice(start - 1, end).sort((a, b) => a - b)[k - 1];
    acc.push(result);
    return acc;
  }, []);
  var answer = result;
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
