function solution(s) {
  const hash = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  let result = s;
  for (const [key, value] of Object.entries(hash)) {
    let regexAll = new RegExp(value, "g");

    result = result.replace(regexAll, key);
  }

  var answer = Number(result);
  return answer;
}

const value = solution("one4seveneight");

console.log(value);

// function solution(s) {
//   let numbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   var answer = s;

//   for (let i = 0; i < numbers.length; i++) {
//     let arr = answer.split(numbers[i]);
//     answer = arr.join(i);
//   }

//   return Number(answer);
// }
