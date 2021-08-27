function solution(s) {
  console.log("works", s);
  const arr = s.split("");
  let charArr = [];
  for (const value in arr) {
    let char = s.charCodeAt(value);
    charArr.push(char);
  }

  function compare(a, b) {
    return b - a;
  }
  const answer = charArr
    .sort(compare)
    .map((element) => String.fromCharCode(element))
    .join("");

  return answer;
}

solution("Zbcdefg");
