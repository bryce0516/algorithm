function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const index = getDigit(nums[i], k);
      digitBucket[index].push(nums[i]);
    }
    nums = [].concat(...digitBucket);
  }

  return nums;
}

const result = radixSort([23, 345, 5467, 12, 2345, 9852]);
console.log(result);
