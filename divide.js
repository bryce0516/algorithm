function solution(arr, divisor) {
  const val = arr
    .filter((element) => element % divisor === 0)
    .sort((a, b) => a - b);
  return val.length === 0 ? [-1] : val;
}

const value = solution([3, 2, 6], 10);

console.log(value);
