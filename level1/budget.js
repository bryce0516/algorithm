function solution(d, budget) {
  function compare(a, b) {
    return a - b;
  }
  const sortedArr = d.sort(compare);

  const recursive = (arr, budget) => {
    console.log("recursive arr", arr);
    const plus = arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    if (plus > budget) {
      arr.pop();
      return recursive(arr, budget);
    } else {
      return arr.length;
    }
  };
  const answer = recursive(sortedArr, budget);
  console.log(answer);
  return answer;
}

solution([1, 3, 2, 5, 4], 9);

function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
