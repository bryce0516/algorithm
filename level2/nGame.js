function solution(n, t, m, p) {
  var answer = "";
  const num = t.toString(2);
  const target = Array.from({ length: t + 1 }, (_, i) => i)
    .join("")
    .split("");

  target.map((element) => {
    const value = Number(element).toString(2);
    console.log(value);
  });
  // for (let i = 0; i < t; i++) {
  //   const element = i.toString(n);
  //   // if (i % 2 === 0) {
  //   //   console.log(element, i);
  //   // }
  //   console.log(element, i);
  // }
  return answer;
}

solution(2, 11, 2, 1);
