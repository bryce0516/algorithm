const sortList = function (arr) {
  // console.log(arr);
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = sortList(arr.slice(0, mid));

  let right = sortList(arr.slice(mid));
  console.log(left, right);
  // return merge(left, right);
};

const merge = (arr1, arr2) => {
  let results = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }
  return [...results, ...arr1, ...arr2];
};

const value = sortList([4, 2, 1, 3]);

console.log(value);
