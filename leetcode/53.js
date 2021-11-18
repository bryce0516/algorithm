//solution
// let maxSubArray = function (nums) {
//   let currentNum = nums[0];
//   let maxNum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     let num = nums[i];
//     console.log("num", num);
//     currentNum = Math.max(num, currentNum + num);
//     console.log("currentNum", currentNum);
//     maxNum = Math.max(maxNum, currentNum);
//     console.log("maxNum", maxNum);
//   }
// };

//timeout
// let maxSubArray = function (nums) {
//   let maxSum;
//   let final;
//   let mid = Math.floor(0 + nums.length / 2);
//   final = nums.reduce((acc, cur, index) => {
//     if (index === mid) {
//       mid = acc;
//     }
//     if (acc < cur) {
//       return acc;
//     } else {
//       return cur;
//     }
//   });

//   const recursive = (inputed, i, sum) => {
//     if (i > nums.length - 1) {
//       return (final = final > maxSum ? final : maxSum);
//     }

//     sum += inputed;

//     if (maxSum < sum) {
//       maxSum = sum;
//     }

//     i++;
//     return recursive(nums[i], i, sum);
//   };
//   nums.map((element, index) => {
//     maxSum = nums[index];
//     recursive(element, index, 0);
//   });

//   return final;
// };

// let maxSubArray = function (nums) {
//   let sum;
//   let maxSum;
//   let arr = [];
//   let final = nums[nums.length - 1];

//   if (nums.length === 1) {
//     return nums[0];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     sum = nums[i];
//     maxSum = nums[i];

//     for (let j = i + 1; j < nums.length; j++) {
//       let innerSum = sum + nums[j];
//       sum = innerSum;
//       if (sum > maxSum) {
//         maxSum = sum;
//       }
//       if (j === nums.length - 1) {
//         arr.push(maxSum);
//       }
//     }
//     if (i === nums.length - 1) {
//       arr.push(maxSum);
//     }
//     final = final > maxSum ? final : maxSum;
//   }

//   return final;
// };

//time out
let maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let maxSum = nums[0];
  let sum;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    if (sum > maxSum) maxSum = sum;
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) maxSum = sum;
    }
  }

  return maxSum;
};

const value = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(value);
//-2, 1, -3, 4, -1, 2, 1, -5, 4
