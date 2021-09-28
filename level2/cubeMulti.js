function solution(arr1, arr2) {
  console.log("origin", arr1, arr2);
  arr1.map((element1, index1) => {
    element1.map((innerElement1, innerIndex1) => {
      arr2.map((element2, index2) => {
        element2.map((innerElement2, innerIndex2) => {});
      });
    });
  });
  var answer = [[]];
  return answer;
}

solution(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [4, 3],
    [2, 1],
  ]
);
