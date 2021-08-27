function solution(s) {
  console.log(s);

  const arr = s.split("");
  let p = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "p" || arr[i] === "P") {
      p += 1;
    }

    if (arr[i] === "y" || arr[i] === "Y") {
      y += 1;
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  let result = p === y;
  return result;
}

// function solution(s) {
//   const arr = Array.from(s).reduce(
//     (acc, current) => {
//       if (current === "p" || current === "P") acc[0]++;
//       if (current === "y" || current === "Y") acc[1]++;
//       return acc;
//     },
//     [0, 0]
//   );

//   // .find((num, idx, arr) => num === arr[idx + 1]) !== undefined
//   // ? true
//   // : false;

//   console.log(arr);
//   return arr[0] === arr[1] ? true : false;
// }

const value = solution("pyPP");

console.log("this is value", value);
