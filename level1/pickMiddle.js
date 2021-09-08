function solution(s) {
  const leng = s.length;

  const middle = leng / 2;
  const answer =
    leng % 2 === 0
      ? s.substring(middle - 1, middle + 1)
      : s.substring(Math.floor(middle), Math.ceil(middle));

  return answer;
}

solution("qwer");
