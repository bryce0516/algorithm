function flatten(arr) {
  // const result = arr.flat(1);
  // console.log(result);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;

  // add whatever parameters you deem necessary - good luck!
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
