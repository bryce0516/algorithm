console.log("pair");

function solution(n, m) {
  const less = (a, b) => {
    const result = b / a;
    console.log("result", result);
    const result2 = result / a;
    console.log("result2", result2);
  };
  // const max = (a, b) => {};
  // const less = m % n === 0 ? n : 1;
  const max = m % n === 0 ? m : m * n;
  const lesval = less(n, m);
  // var answer = [less(n, m), max(n, m)];
  var answer = 0;
  return answer;
}

solution(3, 12);
