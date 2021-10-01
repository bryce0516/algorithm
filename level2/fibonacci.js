function solution(n) {
  let next = 0;
  let fibonacciArr = [0, 1];

  for (let i = 0; i <= n; i++) {
    if (i > 1) {
      next = (fibonacciArr[0] % 1234567) + (fibonacciArr[1] % 1234567);
      fibonacciArr[0] = fibonacciArr[1];
      fibonacciArr[1] = next;
    }
  }
  const answer = fibonacciArr[1] % 1234567;

  return answer;
}

solution(5);
