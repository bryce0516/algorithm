const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      if (arr[j] > currentValue) {
      }

      console.log(arr, j, arr[j + 1]);
    }
    console.log("===========================");
    arr[j + 1] = currentValue;
  }
  return arr;
};

const value = insertion([37, 45, 29, 8, 12, 88, 0]);

// console.log(value);
