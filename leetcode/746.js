/**
 * @param {number[]} cost
 * @return {number}
 */

// var minCostClimbingStairs = function (cost) {
//   if (cost.length <= 3) {
//     if (cost.length === 3) {
//       let first = cost[0] + cost[2];
//       let second = cost[1];
//       return Math.min(first, second);
//     }

//     if (cost.length === 2) {
//       let first = cost[0];
//       let second = cost[1];
//       return Math.min(first, second);
//     }
//   }
//   let current = [cost[0], cost[1]];
//   for (let i = 2; i < cost.length; i++) {
//     let firstCompare = current[i - 1] + cost[i];
//     let secondCompare = current[i - 2] + cost[i];
//     if (i === cost.length - 1) {
//       firstCompare = Math.min(current[i - 1], firstCompare);
//     }
//     current.push(Math.min(firstCompare, secondCompare));
//     console.log(current, i, cost.length);
//   }
//   return current[current.length - 1];
// };

const value = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
