function binarySearch(arr, target) {
  console.log(arr, target);

  let start = 0;
  let end = arr.length - 1;

  let middle = Math.floor(start + end / 2);

  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor(start + end / 2);
  }
  if (arr[middle] === target) {
    return middle;
  }
  return -1;

  // add whatever parameters you deem necessary - good luck!
}

binarySearch([2, 5, 6, 7, 13, 15, 28, 30], 15);
