function solution(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);

  let answerArr = [];
  const makeConcurrency = (element, index) => {
    let start = index;
    let value = 0;
    let mock = [];
    while (start < n) {
      value += arr[start];
      // console.log("연산벨류", value);
      mock.push(arr[start]);
      if (value >= n) {
        // console.log("이쪽에서 break", value);
        answerArr.push(value);
        break;
      }
      start++;
    }
    // console.log(value, index, mock);
  };

  arr.map((element, index) => {
    makeConcurrency(element, index);
  });

  var answer = answerArr.filter((element) => element === n).length;
  return answer;
}

solution(15);
