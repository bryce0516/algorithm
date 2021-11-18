// let findDisappearedNumbers = function (nums) {
//   // time limit exceeded
//   let newArr = Array.from({ length: nums.length }, (_, i) => i + 1);
//   let eliminated = [];
//   const recursive = (inpArr, compareArr) => {
//     if (!inpArr[0]) return compareArr;
//     let check = compareArr.indexOf(inpArr[0]);

//     if (eliminated.includes(inpArr[0])) {
//       inpArr.shift();
//     } else {
//       eliminated.push(inpArr[0]);
//       inpArr.splice(0, 1);
//       compareArr.splice(check, 1);
//     }

//     return recursive(inpArr, compareArr);
//   };
//   const answer = recursive(nums, newArr);
//   return answer;
// };

// let findDisappearedNumbers = function (nums) {
//   //passed
//   const newArr = Array.from({ length: nums.length }, (_, i) => i + 1);
//   const sets = new Set([...newArr]);

//   const checkValue = (sets, target) => {
//   if (target < 1) {
//   return false;
// }
//     if (sets.has(target)) {
//       sets.delete(target);
//       return false;
//     }
//   };
//   for (let i = 0; i < nums.length; i++) {
//     checkValue(sets, nums[i]);
//   }
//   return [...sets];
// };

// let findDisappearedNumbers = function (nums) {
//   //solution //tooslow
//   const newArr = Array.from({ length: nums.length }, (_, i) => i + 1).filter(
//     (x) => nums.indexOf(x) < 0
//   );
//   return newArr;
// };

let findDisappearedNumbers = function (nums) {
  //passed
  let result = [];

  nums.map((element, j) => {
    let index = Math.abs(nums[j]) - 1;
    if (nums[index] < 0) {
      nums[index] = nums[index];
    } else {
      nums[index] = -1 * nums[index];
    }
  });
  nums.map((element, index) => {
    if (element > 0) result.push(index + 1);
  });

  return result;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
