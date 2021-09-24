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
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }

    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  let wantAttach = [];
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.slice(i + 1);

    for (let j = 0; j < rest.length; j++) {
      const rest2 = rest.slice(j + 1);

      for (let k = 0; k < rest2.length; k++) {
        let firstPlusSecond = nums[i] + rest[j] + rest2[k];
        if (isPrime(firstPlusSecond)) {
          wantAttach.push(firstPlusSecond);
        }
        console.log(nums[i], rest[j], "acc", rest2[k], firstPlusSecond);
      }
    }
  }

  return wantAttach.length;
}

solution([1, 2, 10]);
