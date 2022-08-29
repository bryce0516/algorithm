var topKFrequent = function (nums, k) {
  let empty = [];
  if (nums.length === k) return nums;
  const set = new Set(nums);

  const arr = [...set];
  console.log("nums", nums);

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

  console.log("<reduced", reduced);
  let decision = -Infinity;

  const sorted = Object.entries(reduced)
    .sort((a, b) => b[1] - a[1])
    .map((element) => Number(element[0]))
    .slice(0, k);
  return sorted;
};

topKFrequent([2, 3, 4, 1, 4, 0, 4, -1, -2, -1], 2);
