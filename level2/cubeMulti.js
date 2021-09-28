function solution(arr1, arr2) {
  console.log("origin", arr1, arr2);
  arr1.map((element1, index1) => {
    arr2.map((element2, index2) => {
      element2.map((element3, index3) => {});
      console.log(element1[index2], element2[index1], index2);
    });
  });
  var answer = [[]];
  return answer;
}

solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
