function solution(land) {
  let maxValue = [0, 0, 0];
  for (let i = 0; i < land.length; i++) {
    const value = land[i].reduce(
      (acc, cur, index) => {
        if (acc[0] < cur) {
          acc[0] = cur;
          acc[1] = index;
          acc[2] = i;
        }
        return acc;
      },
      [0, 0, 0]
    );

    maxValue = maxValue[0] * 2 <= value[0] ? value : maxValue;
    console.log(value);
  }
  console.log(maxValue);
  let answer = 0;

  return answer;
}

const value = solution([
  [1, 2, 3, 5],
  [5, 6, 7, 10],
  [4, 3, 2, 20],
]);

// console.log(value);
