function solution(msg) {
  const arr = Array.from({ length: 26 }, (_, i) => {
    return [String.fromCharCode(65 + i), i + 1];
  });
  let mock = [];
  let mock2 = [];

  let initialIndex = 0;
  let initialIndex2 = 2;
  let initialString = msg.substring(initialIndex, initialIndex2);
  const recursive = (string, input1, input2, origin) => {};
  recursive(initialString, initialIndex, initialIndex2, initialIndex);

  console.log("this is mock", mock, arr);
}

solution("KAKAO");
