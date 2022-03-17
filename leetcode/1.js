// mine
// var twoSum = function (nums, target) {
//   let arr = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       arr.push(i);
//     } else {
//       for (let j = 0; j < nums.length; j++) {
//         if (j !== i) {
//           if (nums[i] + nums[j] === target) {
//             return (arr = [i, j]);
//           }
//         }
//       }
//     }
//   }
//   return arr;
// };

//good solution
var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var value = nums[i];
    var complementPair = target - value;
    if (map[complementPair] !== undefined) {
      // console.log("work1", map[complementPair]);
      return [map[complementPair], i];
    } else {
      // console.log("work2");
      map[value] = i;
    }
    console.log(map);
  }
};
const result = twoSum([3, 2, 4], 6);

console.log("result", result);
