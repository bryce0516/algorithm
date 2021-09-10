function solution(nums) {
  let temp = [];
  let canhave = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    let chk = true;
    for (let j = 0; j < temp.length; j++) {
      if (nums[i] === temp[j]) {
        chk = false;
      }
    }

    if (chk) {
      temp.push(nums[i]);
    }
  }
  const arr = [...new Set(nums)];
  let answer = temp.length > canhave ? canhave : temp.length;

  return answer;
}

const value = solution([3, 3]);
console.log("val", value);
