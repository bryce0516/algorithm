function sumZero(arr) {
  console.log("workgin", arr);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(" sum", sum);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  console.log("thisi s arr", arr);
}

const result = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);

console.log(result);
