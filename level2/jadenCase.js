function solution(s) {
  const answer = s
    .split(" ")
    .map((element, index) => {
      if (element !== "") {
        element = element[0].toUpperCase() + element.slice(1).toLowerCase();
      }
      return element;
    })
    .join(" ");

  return answer;
}

const value = solution("3people unFollo3wed    me");
console.log(value);
