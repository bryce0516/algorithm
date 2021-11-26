// var maxProfit = function (prices) {
//   console.log(prices);
//   let before = prices[0];
//   let current = prices[0];
//   let min = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     let target = prices[i];

//     current = before - target;
//     before = Math.min(before, prices[i]);
//     min = Math.min(min, current);

//     console.log(">>>>>", i, target);
//     console.log(current, before, min);
//   }

//   if (min > 0) return 0;
//   return Math.abs(min);
// };

var maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

maxProfit([7, 1, 5, 3, 6, 4]);
