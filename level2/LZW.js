function solution(msg) {
  const arr = Array.from({ length: 26 }, (_, i) => {
    return [String.fromCharCode(65 + i), i + 1];
  });
  let mock = [];
  let mock2 = [];

  let initialIndex = 0;
  let initialIndex2 = 1;
  let initialString = msg.substring(0, 1);
  const recursive = (string, input1, input2) => {
    if (input2 === msg.length + 1) return;
    console.log(string, input1, input2);
    let check = "0";
    let trueValue;
    let falseValue;
    arr.map((element, index) => {
      if (element[0] === string) {
        if (mock.includes(element[1]) === false) {
          check = "1";
          trueValue = element[1];
          mock.push(trueValue);
        } else {
          check = "2";
        }
      }
    });

    if (check === "0") {
      falseValue = [string, arr.length + 1];
      arr.push(falseValue);
    }

    console.log("this is check", check);
    if (check === "1") {
      input2++;
      let trueString = msg.substring(input1, input2);

      console.log("trueString", trueString, input1, input2);
      return recursive(trueString, input1, input2);
    } else if (check === "2") {
      input2 = input2 + (input2 - input1);
      let trueString = msg.substring(input1, input2);

      return recursive(trueString, input1, input2);
    } else if ((check = "0")) {
      input1 = input1 + input2 - input1 - 1;
      if (input1 === input2) {
        input2++;
      }
      let falseString = msg.substring(input1, input2);
      console.log("falseString", falseString);
      return recursive(falseString, input1, input2);
    }
  };

  recursive(initialString, initialIndex, initialIndex2);
  console.log("this is mock", mock, arr);
}

solution("TOBEORNOTTOBEORTOBEORNOT");
