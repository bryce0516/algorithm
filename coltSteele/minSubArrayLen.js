// const minSubArrayLen = function(nums, sum) {
//     console.log(nums)
//     let total = 0;
//     let start = 0;
//     let end =0;
//     let minLen = Infinity

//     while(start < nums.length) {
//         console.log(total, start, end, minLen)
//         if(total < sum && end < nums.length) {
//             console.log("end working", nums[end] )
//             total += nums[end];
//             end++
//         } else if (total>= sum) {
//             console.log("start working",nums[start])
//             minLen = Math.min(minLen, end-start)
//             total -= nums[start]
//             start++

//         } else {
//             break;
//         }
//     }

//     return minLen === Infinity ? 0 : minLen




// }

const minSubArrayLen = function (nums, sum) {

  let left = 0
  let right = 0
  
  let answerArr = []
  let makeSum = 0
  let minLen = Infinity
  const length = nums.length

  while (left < length) {


    if(makeSum < sum) {
      makeSum += nums[right]
      right++
    } else if(makeSum >= sum){
      let obj = new Object
      const tempLen = right -left
      console.log('>>>>>>>>',tempLen)
      minLen = Math.min(minLen,tempLen)
      obj[makeSum] = [left,right,makeSum]
      answerArr.push(obj)
      left++
      makeSum = 0
      right = left
    } else{
      break;
    }
    console.log('this ',answerArr, minLen)
  }
  return minLen === Infinity ? 0 : minLen

}


const result = minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)