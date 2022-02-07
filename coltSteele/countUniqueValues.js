const countUniqueValues = function (arr) {
  console.log(arr.length);

  if (arr.length === 0) return 0;
  let i = 0;
  let left = 0;
  while (i < arr.length) {
    console.log(arr[i]);

    if (arr[i] !== arr[left]) {
      left++;
      arr[left] = arr[i];
    }
    if (i === arr.length - 1) {
      arr.splice(left + 1, i + 1);
      return arr;
    }
    console.log(left, i, arr);
    i++;
  }
};

const result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

console.log("this is result ", result.length);

// const countUniqueValues = function (arr) {
//if (arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j]
//     }
//   }
//   return i +1

// }
