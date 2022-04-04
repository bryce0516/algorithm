function solution(allArrows, scoreBoard) {
  // const reverse = scoreBoard.reverse();
  let point = {
    10: 0,
    9: 0,
    8: 0,
    7: 0,
    6: 0,
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
    0: 0,
  };

  const tempLen = scoreBoard.length - 1;
  const newArray = Array.from({ length: 11 }, () => 0);

  let all = scoreBoard.length - 1;

  while (all >= 0) {
    console.log(all);
    if (all === 10) {
      check(all, allArrows);
    }
    // if (10 === all)
    all -= 1;
  }

  function check(picked, leftArrows) {
    if (leftArrows <= 0) {
      return;
    }
    for (let i = 0; i < scoreBoard.length; i++) {
      let maxScore = -Infinity;
      if (scoreBoard[tempLen - picked] !== 0) {
        leftArrows -= scoreBoard[tempLen - picked] + 1;
      } else {
        leftArrows -= 1;
      }

      // console.log("===> i", i, leftArrows);
    }
  }
  // for (let i = 0; i < scoreBoard.length; i++) {
  //   console.log(i, scoreBoard[i]);

  // }
  // while (allArrows > 0) {
  //   console.log(allArrows);

  //   allArrows -= 1;
  // }
  // for (let i = 0; i < scoreBoard.length; i++) {
  //   console.log("i", i, scoreBoard[i]);
  //   check(scoreBoard[i], allArrows);
  //   // if(scoreBoard[i] !==0) {
  //   //   check(scoreBoard[i])
  //   // } else {

  //   // }
  // }

  // function check(pickedScore, leftArrows) {
  //   for (let i = 0; i < scoreBoard.length; ) console.log(pickedScore);
  // }
  // for (let i = 10; i >= 0; i--) {
  //   console.l
  //   // let infoIndex = info.length - i - 1;
  //   // console.log(infoIndex);
  //   // console.log(infoIndex);
  //   // point[i] = info[infoIndex];
  //   // if (info[infoIndex] !== 0) {
  //   //   apeachPoint += i;
  //   // }
  // }

  var answer = [];
  return answer;
}

const result = solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
