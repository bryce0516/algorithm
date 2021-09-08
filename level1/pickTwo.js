function solution(numbers) {
  let mock = [];
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(i, j);
      set.add({ [i]: j });
    }
  }
  console.log(set);
  var answer = [];
  return answer;
}

solution([2, 1, 3, 4, 1]);
