function pivot(arr, start = 0, end = arr.length + 1) {
  console.log(">>>>>>>>>>", arr, start, end);

  // function swap(array, i, j) {
  //   let temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  //   console.log(
  //     "swaped",
  //     temp,
  //     "----",
  //     array[i],
  //     "<<<i",
  //     i,
  //     "----",
  //     array[j],
  //     "<<<j",
  //     j
  //   );
  // }

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    console.log([arr[idx1], arr[idx2]]);
  };
  var pivot = arr[start];
  var swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log("this is arr", arr);
  return swapIdx;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];
pivot(arr);
