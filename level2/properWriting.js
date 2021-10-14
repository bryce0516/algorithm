function solution(s) {
  const val = s.match(/()/g);

  class RegExp1 extends RegExp {
    [Symbol.match](str) {
      const result = RegExp.prototype[Symbol.match].call(this, str);
      console.log("this is result", result);
      return result.map((x) => `(${x})`);
    }
  }

  console.log(s.match(new RegExp1("()")));
  // const first = target.filter((element) => element === "(");
  // const second = target.filter((element) => element === ")");
  // if (first.length === second.length) {
  //   return true;
  // } else {
  //   return false;
  // }
}

solution("()()");
