function solution(s) {
  const target = s.split("");
  const first = target.filter((element) => element === "(");
  const second = target.filter((element) => element === ")");
  if (first.length === second.length) {
    return true;
  } else {
    return false;
  }
}

solution("()()");
