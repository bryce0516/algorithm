// const merge = (arr1, arr2) => {
//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     result.push(arr1[j]);
//     j++;
//   }
//   return result;
// };

// const value = merge([1, 10, 50], [2, 14, 99, 100]);

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// };

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let center = Math.floor(arr.length / 2);
  let left = arr.slice(0, center);
  let right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  const result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
    console.log(arr1, arr2);
  }

  return [...result, ...arr1, ...arr2];
}

const value = mergeSort([10, 24, 76, 73, 72, 19, 9]);
console.log(">>>>>", value);
