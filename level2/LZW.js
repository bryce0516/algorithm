function solution(msg) {
  const arr = Array.from({ length: 26 }, (_, i) => {
    return [String.fromCharCode(65 + i), i + 1];
  });
  let mock = [];
  let mock2 = [];

  let initialIndex = 0;
  let initialIndex2 = 1;
  let initialString = msg.substring(initialIndex, initialIndex2);

  const recursive = (string, start, end, current, inputedCheck) => {
    console.log(current, string, start, end);
    if (start >= 3) return;

    let check = false;
    let beforeData;
    arr.map((element, index) => {
      if (element[0] === string) {
        beforeData = element[1];
        check = true;
      }
    });

    console.log("check", check);
    if (check === true) {
      if (initialIndex2 - initialIndex === 1) {
        initialIndex2++;
        current++;
      }
      let trueString = msg.substring(initialIndex, initialIndex2);
      return recursive(trueString, initialIndex, initialIndex2, current, check);
    } else if (check === false) {
      if (initialIndex2 - initialIndex === 2) {
        initialIndex = current;
      }
      let falseString = msg.substring(initialIndex, initialIndex2);
      return recursive(
        falseString,
        initialIndex,
        initialIndex2,
        current,
        check
      );
    }

    // return recursive(string, start, end);
  };

  recursive(initialString, initialIndex, initialIndex2, 0);

  console.log("this is mock", mock, arr);
}

solution("KAKAO");
