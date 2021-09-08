// function solution(n, arr1, arr2) {
//   const numberToBite = (num) => {
//     let bite = num.toString(2);

//     if (bite.length !== n) {
//       const addZero = n - bite.length;
//       for (let i = 0; i < addZero; i++) {
//         bite = 0 + bite;
//       }
//     }
//     return bite;
//   };

//   const arr1Bite = arr1
//     .map((element) => numberToBite(element))
//     .map((element2) => element2.split(""));

//   const arr2Bite = arr2
//     .map((element) => numberToBite(element))
//     .map((element2) => element2.split(""));

//   let resultArr = [];
//   let finalArr = [];
//   for (let i = 0; i < arr1Bite.length; i++) {
//     resultArr = [];
//     for (let j = 0; j < arr2Bite.length; j++) {
//       resultArr.push(
//         Number(arr1Bite[i][j]) + Number(arr2Bite[i][j]) === 0 ? " " : "#"
//       );
//       if (j === arr2Bite.length - 1) {
//         finalArr.push(resultArr.join(""));
//       }
//     }
//   }

//   // const reg = / +/g; // 여러개 공백 한개로 치환
//   // const answer = finalArr.map((element) => element.replace(reg, " "));

//   return finalArr;
// }

function solution(n, arr1, arr2) {
  const value = arr1.map(
    (v, i) => addZero(n, v | arr2[i])
    // .replace(/1|0/g, (a) =>
    // +a ? "#" : " "
  );
  console.log(value);
}

const addZero = (n, s) => {
  console.log(n, s);
  return "0".repeat(n - s.length) + s;
};

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
