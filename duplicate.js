function solution(arr) {
  let mock = [];
  for (let i = 0; i < arr.length; i++) {
    let chk = true;
    for (let j = 0; j < mock.length; j++) {
      if (mock[j] === arr[i]) {
        chk = false;
      }
    }
    if (chk) {
      mock.push(arr[i]);
    }
  }

  console.log(mock);
  var answer = [];

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);
