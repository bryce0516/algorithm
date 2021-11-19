var generate = function (numRows) {
  let first = 0;
  let second = 1;
  let arr = [[1], [1, 1]];
  for (let i = 0; i < numRows - arr.length; i++) {
    let target = [];
    let mock = console.log(">>>>>>>>>>>>>>>>>>> index", i);
    for (let j = 0; j < arr[arr.length - 1].length; j++) {
      mock += arr[i][j];
    }
    console.log(mock);
    target = [1, ...mock, 1];
    arr = [...arr, [...target]];
  }
  console.log(arr);
  // const recursive = (start, end, memo) => {
  //   if (start === end + 1) return memo;

  //   console.log(start, memo);

  //   return (memo =
  //     recursive(start + 1, end, memo) + recursive(start + 1, end, memo));
  // };
  // const answer = recursive(0, numRows, []);
  // console.log(answer);
};
const value = generate(5);
