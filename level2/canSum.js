// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;
//   for (let num of numbers) {
//     const remainder = targetSum - num;

//     if (canSum(remainder, numbers, memo) === true) {
//       memo[targetSum] = true;
//       return true;
//     }
//   }
//   memo[targetSum] = false;
//   return false;
// };


// const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return []
//   if (targetSum < 0) return null

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderResult = howSum(remainder, numbers, memo)
//     console.log(num)
//     console.log("reminderResult", remainderResult)
//     if(remainderResult !== null) {
//       memo[targetSum] = [...remainderResult, num]
//       return memo[targetSum]
//     }

//   }
//   memo[targetSum] = null
//   return null
// };

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers)
    if (shortestCombination !== null) {
      const combination = [...remainderCombination, num]

      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }

  return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));




// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));




// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));
