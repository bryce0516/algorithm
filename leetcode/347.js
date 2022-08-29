var topKFrequent = function (nums, k) {
  if (nums.length === k) return nums;
  const empty = [];
  const reduced = nums.reduce((acc, cur, index) => {
    // console.log("==>", index, acc, cur);
    if (Object.hasOwn(acc, cur)) {
      acc[cur]++;
      return acc;
    } else {
      acc[cur] = 1;
      return acc;
    }
  }, {});
  const sorted = Object.entries(reduced).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    empty.push(Number(sorted[i][0]));
  }

  return empty;
};

// var topKFrequent = function (nums, k) {
//   const numsCount = {};
//   const res = [];
//   for (let num of nums) {
//     numsCount[num] = (numsCount[num] ?? 0) + 1;
//   }
//   let bucket = Array.from({ length: nums.length + 1 }, () => []);
//   for (let num in numsCount) {
//     bucket[numsCount[num]].push(num);
//   }

//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i].length > 0) {
//       bucket[i].forEach((elem) => res.push(elem));
//       if (res.length === k) return res;
//     }
//   }
//   console.log(bucket);
// };

topKFrequent([2, 3, 4, 1, 4, 0, 4, -1, -2, -1], 2);
