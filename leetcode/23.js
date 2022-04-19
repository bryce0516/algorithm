let flatMap = (arr) => {};

var mergeKLists = function (lists) {
  const newArr = lists.flat();
  return split(newArr);
};

const split = (lists) => {
  if (lists.length <= 1) return lists;

  const mid = Math.floor(lists.length / 2);
  const left = mergeKLists(lists.slice(0, mid));
  const right = mergeKLists(lists.slice(mid));
  return merge(left, right);
};

const merge = (arr1, arr2) => {
  const results = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }
  const arr = [...results, ...arr1, ...arr2];

  return arr;
};

const value = mergeKLists([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]);

console.log("resuls ======>", value);
