const waysToCoverSteps = (n) => {
  let cache = {};
  if (n < 0) return 0;
  if (n === 1) return 1;
  // console.log(
  //   waysToCoverSteps(n - 1)
  //   // waysToCoverSteps(n - 2),
  //   // waysToCoverSteps(n - 3)
  // );
  const value = cache[n]
    ? cache[n]
    : (cache[n] =
        waysToCoverSteps(n - 1) +
        waysToCoverSteps(n - 2) +
        waysToCoverSteps(n - 3));
  console.log(">>", value);
  return value;
};

const v = waysToCoverSteps(4);
console.log(v);
