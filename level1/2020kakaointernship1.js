function solution(numbers, hand) {
  const keypad = {
    1: 0,
    2: 0,
    3: 0,
    4: 1,
    5: 1,
    6: 1,
    7: 2,
    8: 2,
    9: 2,
    "*": 4,
    0: 4,
    "#": 4,
  };

  let left = "*";
  let usingHands = "";
  let right = "#";
  const checkNumber = (input) => {
    while (input) {
      if (input === 1 || input === 4 || input === 7) {
        left = input;
        usingHands += "L";
      }
      if (input === 3 || input === 6 || input === 9) {
        right = input;
        usingHands += "R";
      }
      console.log(input, left, right);
      if (input === 2 || input === 5 || input === 8 || input === 0) {
        let compareT = keypad[input];
        let compareL = Math.abs(compareT - keypad[left]);
        let compareR = Math.abs(compareT - keypad[right]);
        if (compareL > compareR) {
          console.log("Left");
          right = input;
          usingHands += "R";
        }
        if (compareL < compareR) {
          console.log("Right");
          left = input;
          usingHands += "L";
        }
        if (compareL === compareR) {
          if (hand === "right") {
            console.log("Right");
            usingHands += "R";
            right = input;
          } else {
            console.log("Left");
            usingHands += "L";
            left = input;
          }
        }
        console.log("compare => ", compareL, compareR);
      }
      break;
    }
  };
  numbers.map((element, index) => {
    checkNumber(element);
  });
  console.log("usingHands", usingHands);
  var answer = "";
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
