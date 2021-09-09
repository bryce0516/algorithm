function solution(numbers) {
  console.log(numbers);

  // for (let i = 0; i < numbers.length - 1; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     console.log(i, j);
  //   }
  // }

  let resultArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let result = "";
    console.log(numbers[i].toString());
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
      result += numbers[i].toString() + numbers[j].toString();
    }
    resultArr.push(result);
  }
  console.log(resultArr);
  var answer = "";
  return answer;
}

solution([6, 10, 2]);
