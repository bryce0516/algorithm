function solution(n) {
  const conver = n.toString(3);
  let arr = conver.split("");
  let arr2 = conver.split("");
  let arrLength = Math.floor(arr.length / 2);

  for (let i = 0; i < arrLength; i++) {
    arr[arr.length - 1 - i] = arr2[i];
    arr[i] = arr2[arr.length - 1 - i];
  }
  const answer = parseInt(arr.join(""), 3);
  console.log(answer);
  return answer;
}

solution(78413450);
