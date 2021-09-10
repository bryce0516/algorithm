function solution(left, right) {
  let answer = 0;
  let mock = [];
  const yaksuNum = (a, b) => {
    if (a > b) {
      return;
    }

    if (b % a === 0) {
      mock.push(a);
    }

    a++;
    return yaksuNum(a, b);
  };

  for (let i = left; i < right + 1; i++) {
    let mock2 = [];
    for (let j = 1; j < i + 1; j++) {
      if (i % j === 0) {
        mock2.push(j);
      }
    }
    if (mock2.length % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
    mock.push(mock2);
  }

  return answer;
}

const value = solution(24, 27);
console.log("this is value", value);

// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }
