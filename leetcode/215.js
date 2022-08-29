// var findKthLargest = function (nums, k) {
//   function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//       let pivotIndex = pivot(arr, left, right);
//       quickSort(arr, left, pivotIndex - 1);
//       quickSort(arr, pivotIndex + 1, right);
//     }

//     return arr;
//   }

//   function pivot(arr, start = 0, end = arr.length + 1) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
//     let pivot = arr[start];
//     let swapIdx = start;
//     for (let i = start + 1; i < arr.length; i++) {
//       if (pivot < arr[i]) {
//         swapIdx++;
//         swap(arr, swapIdx, i);
//       }
//     }

//     swap(arr, start, swapIdx);
//     return swapIdx;
//   }
//   const result = quickSort(nums)[k - 1];
//   return result;
// };

// var findKthLargest = function (nums, k) {
//   const swap = (arr, idx1, idx2) => {
//     const temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
//   };

//   const partition = (left, right, pivotIndex) => {
//     let pivot = nums[pivotIndex];
//     swap(nums, pivotIndex, right);
//     let storeIndex = left;

//     for (let i = left; i <= right; i++) {
//       if (nums[i] < pivot) {
//         swap(nums, storeIndex, i);
//         storeIndex++;
//       }
//     }
//     swap(nums, pivotIndex, right);
//     return storeIndex;
//   };

//   const quickSelect = (left, right, smallest) => {
//     if (left === right) {
//       return nums[left];
//     }
//     let random = Math.floor(Math.random(right - left) * 10);
//     console.log("random", random);
//     let pivotIndex = left + random;
//     pivotIndex = partition(left, right, pivotIndex);

//     if (smallest === pivotIndex) {
//       return nums[smallest];
//     } else if (smallest < pivotIndex) {
//       return quickSelect(left, pivotIndex - 1, smallest);
//     } else return quickSelect(pivotIndex + 1, right, smallest);
//   };
//   const size = nums.length;

//   return quickSelect(0, size - 1, size - k);
// };

// const findKthLargest = (nums, k, left = 0, right = nums.length - 1) => {
//   const pivotIndex = partition(nums, left, right);
//   if (pivotIndex === k - 1) return nums[pivotIndex];
//   if (pivotIndex > k - 1) return findKthLargest(nums, k, left, pivotIndex - 1);
//   return findKthLargest(nums, k, pivotIndex + 1, right);
// };

// const random = (i, j) => Math.floor(Math.random() * (j - i + 1) + i);
// const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
// const partition = (arr, left, right) => {
//   const pivotIndex = random(left, right);
//   const pivot = arr[pivotIndex];
//   let write = left;
//   swap(arr, right, pivotIndex);
//   for (let i = left; i < right; i++) {
//     if (arr[i] > pivot) {
//       swap(arr, i, write);
//       write++;
//     }
//   }
//   swap(arr, write, right);
//   return write;
// };

var findKthLargest = function (nums, k) {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  const partition = (left, right, pivotIndex) => {
    let pivot = nums[pivotIndex];
    swap(pivotIndex, right);

    let storeIndex = left;
    for (let i = left; i <= right; i++) {
      if (nums[i] < pivot) {
        swap(i, storeIndex);
        storeIndex++;
      }
    }
    swap(storeIndex, right);

    return storeIndex;
  };

  const quickSelect = (left, right, k) => {
    if (left === right) return nums[left];

    let pivotIndex = partition(left, right, Math.floor((left + right) / 2));
    console.log(nums);
    if (pivotIndex === nums.length - k) return nums[pivotIndex];
    else if (pivotIndex < nums.length - k)
      return quickSelect(pivotIndex + 1, right, k);
    else return quickSelect(left, pivotIndex - 1, k);
  };

  return quickSelect(0, nums.length - 1, k);
};

const result = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log(result);
