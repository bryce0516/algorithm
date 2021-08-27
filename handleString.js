function solution(s) {
  if (s.indexOf("e") === -1) {
    console.log("wokrs1");
    if (s.length === 4 || s.length === 6) {
      // if (isNaN(parseInt(s, 10)) === false) {
      if (isNaN(Number(s)) === false) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const value = solution("1234");
console.log(value);
