const search = function (array, val) {
  let min = 0;
  let max = array.length - 1;
  let i = 0;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    console.log(currentElement, i);
    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
    i++;
  }
  return -1;
};

const result = search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);

console.log(result);
