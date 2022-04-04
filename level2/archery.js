function solution(allArrows, scoreBoard) {
  // const reverse = scoreBoard.reverse();
  let acPoint = scoreBoard;
  // console.log("acPoint", acPoint);
  const result = scoreBoard.reverse().reduce((prev, curr, index) => {
    if (scoreBoard[index] !== 0) {
      return (prev += index);
    } else {
      return prev;
    }
  }, 0);

  function check(pickedNumber, remainAllow) {
    let i = 10;
    let total = 0;
    let picked = [];
    while (remainAllow > 0) {
      if (scoreBoard[i]) {
        remainAllow -= scoreBoard[pickedNumber] + 1;
        picked.push(i);
        total += i;
      } else {
        remainAllow -= 1;
      }
      console.log(i, remainAllow, scoreBoard[pickedNumber]);
      pickedNumber--;
      i--;
    }
    console.log(picked);

    // for (let i = 0; i < scoreBoard.length; i++) {
    //   if (scoreBoard[i]) {
    //     remainAllow -= scoreBoard[i];
    //   }

    //   console.log(i, scoreBoard[i], pickedNumber);
    // }
  }
  check(10, allArrows);
  const tempLen = scoreBoard.length - 1;
  const newArray = Array.from({ length: 11 }, () => 0);

  let all = scoreBoard.length - 1;

  // while (all >= 0) {
  //   console.log(all);
  //   if (all === 10) {
  //     check(all, allArrows);
  //   }
  //   // if (10 === all)
  //   all -= 1;
  // }

  // function check(picked, leftArrows) {
  //   if (leftArrows <= 0) {
  //     return;
  //   }
  //   for (let i = 0; i < scoreBoard.length; i++) {
  //     let maxScore = -Infinity;
  //     if (scoreBoard[tempLen - picked] !== 0) {
  //       leftArrows -= scoreBoard[tempLen - picked] + 1;
  //     } else {
  //       leftArrows -= 1;
  //     }

  //     // console.log("===> i", i, leftArrows);
  //   }
  // }
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
