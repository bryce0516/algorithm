// let findPermutations = (string) => {
//   if (!string || typeof string !== "string") {
//     return "Please enter a string";
//   } else if (string.length < 2) {
//     return string;
//   }

//   let permutationsArray = [];

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];

//     if (string.indexOf(char) != i) continue;
//     let first = string.slice(0, i);
//     let second = string.slice(i + 1, string.length);
//     let remainingChars = first + second;
//     console.log("fir", first, "sec", second);

//     for (let permutation of findPermutations(remainingChars)) {
//       // console.log(char + permutation);
//       permutationsArray.push(char + permutation);
//     }
//   }
//   return permutationsArray;
// };
// const value = findPermutations("aabc");
// console.log(value);

function solution(nums) {
  console.log("this is nums", nums);

  for (let i = 0; i < nums.length; i++) {
    const rest = nums.slice(i + 1);
    let wantAttach = [];
    for (let j = 0; j < rest.length; j++) {
      if (rest[j + 1] !== undefined) {
        wantAttach.push([rest[j], rest[j + 1]]);
      }
    }
    console.log(i, rest);
    console.log("attach", wantAttach);
  }

  var answer = -1;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}

solution([1, 2, 3, 4, 5]);
