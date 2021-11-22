//pass but faster than 6.81
// var generate = function (numRows) {
//   let plus = numRows + 1;
//   if (numRows === 0) return [1];
//   let arr = [[1], [1, 1]];
//   for (let i = 1; i < plus - 1; i++) {
//     let target = arr[i];
//     let value = 0;
//     let mock = [];
//     console.log("target >>> ", target);
//     for (let j = 0; j < target.length; j++) {
//       console.log(i, j, ">>>> ");
//       value += arr[i][j];
//       mock.push(value);
//       value = arr[i][j];
//     }
//     console.log(mock);
//     target = [...mock, 1];
//     arr = [...arr, [...target]];
//   }
//   console.log(arr[numRows]);

//   return arr[numRows];
// };

// const value = generate(1);
