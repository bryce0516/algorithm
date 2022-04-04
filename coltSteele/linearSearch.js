function linearSearch(arr, target) {
  console.log(arr, target);
  // add whatever parameters you deem necessary - good luck!
  let answer = arr.indexOf(target);

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr.indexOf(target));
  //   // console.log(arr[i], target);
  //   // if (arr[i] === target) {
  //   //   return (answer = i);
  //   // } else {
  //   //   answer = -1;
  //   // }
  // }
  return answer;
}

const result = linearSearch([10, 15, 20, 25, 30, 35], 15);
console.log(result);
