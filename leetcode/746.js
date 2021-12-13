/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let initialValue = cost[0];
  let before1 = cost[0];
  let secondValue = cost[1];
  let before2 = cost[1];
  let answer;
  for (let i = 3; i < cost.length; i += 2) {
    // let current = initialValue + cost[i]
    // let secondCurrent = secondValue + cost[i]
    // let current
  }
  // let before = cost[0];
  // let secondbefore = cost[0];
  // let after = 0;

  // for (let i = 0; i < cost.length; i++) {
  //   let current = before + cost[i];

  //   let min = Math.min(current, before);
  //   after = min;
  // }
};

minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
