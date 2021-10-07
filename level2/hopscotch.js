// function solution(land) {
//   let maxValue = [0, 0, 0];
//   for (let i = 0; i < land.length; i++) {
//     const value = land[i].reduce(
//       (acc, cur, index) => {
//         if (acc[0] < cur) {
//           acc[0] = cur;
//           acc[1] = index;
//           acc[2] = i;
//         }
//         return acc;
//       },
//       [0, 0, 0]
//     );

//     maxValue = maxValue[0] * 2 <= value[0] ? value : maxValue;
//     console.log(value);
//   }
//   console.log(maxValue);
//   let answer = 0;

//   return answer;
// }

// const value = solution([
//   [1, 2, 3, 5],
//   [5, 6, 7, 10],
//   [4, 3, 2, 20],

// console.log(value);

// function solution(land) {
//   let wholeLength = land.length - 2;
//   const maxValue = land[0].reduce(
//     (acc, cur, index) => {
//       if (acc[0] < cur) {
//         acc[0] = cur;
//         acc[1] = index;
//       }
//       return acc;
//     },
//     [land[0][0], 0]
//   );
//   let index = 0;
//   const tailRecursive = (choosen, leng, nextArr) => {
//     const result = nextArr.reduce(
//       (acc, cur, index) => {
//         if (acc[0] < cur && choosen[1] !== index) {
//           acc[0] = cur;
//           acc[1] = index;
//         }
//         return acc;
//       },
//       [nextArr[0], 0]
//     );
//     console.log("this is choosen", choosen, nextArr, result);
//     index++;
//   };

//   const slicedArr = land.slice(1, 2).flat();
//   tailRecursive(maxValue, wholeLength, slicedArr);

//   // slicedArr.map((element, index) => {
//   //   console.log(element);
//   // });
//   console.log(maxValue, slicedArr);

//   let answer = "";
//   return answer;
// }
const solution = (land) => {
  const firstArr = land[0];

  const restArr = land.slice(1);
  const slicedLength = restArr.length - 1;
  let mock = [];
  const recursive = (target, restArr, pickedIndex, length, sum) => {
    console.log("i picked", target, "this is sum", sum, length);

    sum += target;
    if (length < 0) {
      console.log("end", sum);
      mock.push(sum);
      return sum;
    }

    const remainder = restArr.slice(1);

    restArr[0].map((element, index) => {
      if (index !== pickedIndex) {
        return recursive(element, remainder, index, length - 1, sum);
      }
    });
  };

  firstArr.map((element, index) => {
    console.log("this is top index", index);
    recursive(element, restArr, index, slicedLength, 0);
  });

  const result = mock.reduce((acc, cur) => (acc > cur ? acc : cur));

  return result;
};

solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]);
