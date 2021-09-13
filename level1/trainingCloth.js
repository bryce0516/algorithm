function solution(n, lost, reserve) {
  const newArr = Array.from({ length: n }, (_, i) => 1).map(
    (element, index) => {
      reserve.map((element2, index2) => {
        if (element2 === index + 1) {
          element += 1;
        }
      });
      lost.map((element3, index3) => {
        if (element3 === index + 1) {
          element -= 1;
        }
      });

      return element;
    }
  );

  let newArr2 = newArr.slice();
  newArr.map((element, index) => {
    newArr2.map((element2, index2) => {
      if (newArr2[index] === 0) {
        if (newArr2[index - 1] === 2) {
          newArr2[index - 1] -= 1;
          newArr2[index] += 1;
        } else if (newArr2[index + 1] === 2) {
          newArr2[index + 1] -= 1;
          newArr2[index] += 1;
        }
      }
    });
  });
  console.log(newArr, newArr2);
  const answer = newArr2.filter((element) => element !== 0).length;

  return answer;
}

// function solution(n, lost, reserve) {
//   const actualReserve = reserve.filter((el) => lost.indexOf(el) === -1);
//   const actualLost = lost.filter((el) => reserve.indexOf(el) === -1);

//   const set = Array.apply(undefined, new Array(n)).map((el, i) =>
//     actualLost.indexOf(i + 1) === -1 ? true : false
//   );

//   for (let hero of actualReserve) {
//     if (set[hero - 1 - 1] === false) {
//       set[hero - 1 - 1] = true;
//     } else if (set[hero - 1 + 1] === false) {
//       set[hero - 1 + 1] = true;
//     }
//   }
//   console.log(actualReserve, set, set.filter((el) => el).length);
//   return set.filter((el) => el).length;
// }

// function solution(n, lost, reserve) {
//   let tmp = reserve.slice();

//   for (let i in tmp) {
//     let key = lost.indexOf(tmp[i]);
//     console.log(key, i);
//     if (key != -1) {
//       console.log("index", reserve.indexOf(tmp[i]));
//       lost.splice(key, 1);
//       reserve.splice(reserve.indexOf(tmp[i]), 1);
//     }
//   }
//   console.log(lost, reserve);

//   for (let i of reserve) {
//     let key = lost.includes(i - 1) ? lost.indexOf(i - 1) : lost.indexOf(i + 1);
//     console.log(key);
//     if (key != -1) {
//       lost.splice(key, 1);
//     }
//   }

//   return n - lost.length;
// }

const value = solution(5, [2, 4], [1, 3, 5]);
// console.log(value);
