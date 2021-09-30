function solution(n) {
  let mock = [];
  let f0f1 = 0;
  let before = 0;
  let after = 0;
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      f0f1 += i;
    }
    const value = {};

    console.log(i);
    // console.log(i);
    // let val = (i-1) + (i - 2);
    // mock.push(val);
  }
  console.log(mock, f0f1);
  var answer = 0;
  return answer;
}

solution(5);
