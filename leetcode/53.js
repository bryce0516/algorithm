// let maxSubArray = function (nums) {
//solution
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
let maxSubArray = function (nums) {
  let maxSum;
  let final = nums.reduce((acc, cur, index) => (acc > cur ? cur : acc));

  const recursive = (inputed, i, sum) => {
    if (i > nums.length - 1) {
      return (final = final > maxSum ? final : maxSum);
    }

    sum += inputed;

    if (maxSum < sum) {
      maxSum = sum;
    }

    i++;
    return recursive(nums[i], i, sum);
  };
  nums.map((element, index) => {
    maxSum = nums[index];
    recursive(element, index, 0);
  });

  return final;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
//-2, 1, -3, 4, -1, 2, 1, -5, 4
