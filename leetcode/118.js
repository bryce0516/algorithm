//success but faster than 5.09
// var generate = function (numRows) {
//   if (numRows === 1) return [[1]];
//   if (numRows === 2) return [[1], [1, 1]];
//   let arr = [[1], [1, 1]];
//   for (let i = 1; i < numRows - 1; i++) {
//     let target = [];
//     let mock = [];
//     let value = 0;
//     for (let j = 0; j < arr[arr.length - 1].length; j++) {
//       value += arr[i][j];
//       mock.push(value);
//       value = arr[i][j];
//     }

//     target = [...mock, 1];
//     arr = [...arr, [...target]];
//   }
//   console.log(arr);

//   return arr;
// };

var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  let arr = [[1], [1, 1]];
  for (let i = 1; i < numRows - 1; i++) {
    let target = arr[i];
    let value = 0;
    let mock = [];
    console.log("target >>> ", target);
    for (let j = 0; j < target.length; j++) {
      console.log(i, j, ">>>> ");
      value += arr[i][j];
      mock.push(value);
      value = arr[i][j];
    }
    console.log(mock);
    target = [...mock, 1];
    arr = [...arr, [...target]];
  }
  console.log(arr);

  return arr;
};

// var generate = function (numRows) {
//   if (numRows === 1) return [[1]];
//   let i;
//   let j;
//   let row = [1, 1];
//   let res = [];
//   let temp = [];
//   for (i = 1; i <= numRows; i++) {
//     temp = Array(i).fill(1);
//     console.log("temp", temp);
//     for (j = 0; j < i; j++) {
//       if (j !== 0 && j !== i - 1) {
//         temp[j] = row[j - 1] + row[j];
//         console.log(i, j);
//       }
//     }
//     res.push(temp);
//     row = temp;
//   }
//   console.log(res);
// };
const value = generate(4);
