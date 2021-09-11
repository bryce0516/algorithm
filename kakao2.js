function solution(n, k) {
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }

    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  const trans = n.toString(k);
  const sp = trans.split("0").filter((element) => isPrime(element)).length;

  var answer = sp;
  return answer;
}

solution(437674, 3);
