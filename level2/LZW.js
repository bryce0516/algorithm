function solution(msg) {
  const arr = Array.from({ length: 26 }, (_, i) => {
    return [String.fromCharCode(65 + i), i + 1];
  });
  let mock = [];
  let mock2 = [];

  let initialIndex = 0;
  let initialIndex2 = 2;
  let initialString = msg.substring(initialIndex, initialIndex2);
  const recursive = (string, input1, input2, origin) => {
    console.log(origin, string, input1, input2);
    if (input2 > msg.length) return;
    let check = false;
    arr.map((element, index) => {
      if (element[0] === string) {
        check = true;
        const trueValue = element[1];
        mock.push(trueValue);
      }
    });
    console.log("check >>", check);
    if (check === false) {
      const add = [string, arr.length + 1];
      arr.push(add);
      if (input2 - input1 === 2) {
        input2 = input2 - 1;
        input1 = origin;
      } else if (input2 - input1 > 2) {
        input1 = origin + 1;
        input2 = input1 + 1;
        origin++;
      } else if (input2 - input1 < 2) {
      }
      let falseString = msg.substring(input1, input2);
      return recursive(falseString, input1, input2, origin);
    } else if (check === true) {
      if (input2 - input1 === 2) {
        input2++;
        origin++;
      } else if (input2 - input1 < 2) {
        input1++;
        input2 = input1 + 2;
        origin = input1;
      } else if (input2 - input1 > 2) {
        input1 = origin + 1;
        input2 = input1 + 1;
        origin++;
      }
      let trueString = msg.substring(input1, input2);
      return recursive(trueString, input1, input2, origin);
    }
  };
  recursive(initialString, initialIndex, initialIndex2, initialIndex);

  console.log("this is mock", mock, arr);
}

solution("TOBEORNOTTOBEORTOBEORNOT");
