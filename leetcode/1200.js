let minimumAbsDifference = function (arr) {
  arr.sort((x, y) => x - y);
  let answer = [];

  let minPairDiff = Infinity;
  console.log("minpairdiff initial", minPairDiff);
  for (let i = 0; i < arr.length - 1; ++i) {
    minPairDiff = Math.min(minPairDiff, arr[i + 1] - arr[i]);
    console.log(arr[i + 1], arr[i], minPairDiff);
  }
  console.log("minPairDiff", minPairDiff);
  for (let i = 0; i < arr.length - 1; ++i) {
    console.log(">>>>>", arr[i + 1] - arr[i], minPairDiff);
    if (arr[i + 1] - arr[i] == minPairDiff) {
      answer.push([arr[i], arr[i + 1]]);
    }
  }
  console.log(answer);
  return answer;
};

minimumAbsDifference(
  [3, 8, -10, 23, 19, -4, -14, 27]
  // [3, 8, -10, 23, 19, -4, -14, 27]
);

// Output: [[-14,-10],[19,23],[23,27]]
