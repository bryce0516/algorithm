// const maxSubarraySum = function (arr, n) {
//   if (arr.length === 0) return null;
//   let pointer = 0;
//   let sum = 0;
//   let max = 0;
//   let i = 0;
//   while (i < arr.length) {
//     console.log(arr[i], sum, i, pointer);
//     if (n - 1 < i) {
//       console.log("this is before", sum, arr[pointer]);
//       sum = sum - arr[pointer];
//       console.log("this is sum", sum, arr[pointer]);
//       pointer++;
//     }
//     sum += arr[i];
//     if (sum > max) {
//       max = Math.max(sum, max);
//     }
//     i++;
//   }
//   return max;
// };

// const maxSubarraySum = function (arr, num) {
//   if (num > arr.length) {
//     return null;
//   }

//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }

//     if (temp > max) {
//       max = temp;
//     }
//   }

//   return max;
// };

const maxSubarraySum = function (arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

const result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log(result);
