function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, index) => {
    if (signs[index]) {
      acc += cur;
    } else {
      acc -= cur;
    }
    return acc;
  }, 0);
}

const value = solution([4, 7, 12], [true, false, true]);

console.log(value);
