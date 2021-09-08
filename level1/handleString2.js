function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] < b[n] ? -1 : b[n] < a[n] ? 1 : a < b ? -1 : a > b ? 1 : 0
  );
}

const value = solution(["abce", "abcd", "cdx"], 2);
console.log(value);
