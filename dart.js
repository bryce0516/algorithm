function solution(dartResult) {
  const arr = dartResult.split("");

  console.log("length", arr.length);

  let dummy = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(Number(arr[i]))) {
      dummy.push(i);
    }
  }
  const parse = [];
  for (let i = 0; i < dummy.length; i++) {
    let value;
    if (dummy[i + 1] === undefined) {
      value = dartResult.substring(dummy[i], dummy[arr.length]);
    } else {
      value = dartResult.substring(dummy[i], dummy[i + 1]);
    }
    parse.push(value);
  }
  console.log(parse);
  // for (let i = 0; i < dummy.length; i++) {
  //   // const re1 = dartResult.substr(dummy[i], dummy[i +1]);
  //   console.log("this is re1", dummy[i]);
  // }

  // // const mock = `1`;
  // const mock2 = `+`;
  // const mock3 = `1`;
  // const re = mock + mock2 + mock3;
  // console.log(result);
  // const result = arr.join("");
  // console.log(result);
  var answer = 0;
  return answer;
}

solution("1S2D*3T");
