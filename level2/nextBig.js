function solution(n) {
  const two = n
    .toString(2)
    .split("")
    .filter((element) => element !== "0").length;
  var answer = 0;
  while (true) {
    n++;
    const findAnswer = n
      .toString(2)
      .split("")
      .filter((element) => element !== "0").length;
    if (two === findAnswer) {
      answer = n;
      break;
    }
  }

  return answer;
}

solution(78);
