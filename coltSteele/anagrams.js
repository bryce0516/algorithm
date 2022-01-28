// const solution = function (input1, input2) {

//   const input1Arr = input1.split("").sort().join("");
//   const input2Arr = input2.split("").sort().join("");
//   if (input1Arr === input2Arr) {
//     return true;
//   }
//   return false;
// };

const solution = function (first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log("firsts", lookup);
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    console.log(">> key", lookup[letter], letter);
    if (!lookup[letter]) {
      console.log("problem", lookup[letter], letter);
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(lookup);
  return true;
};
const result = solution("anagram", "nagaram");
console.log(result);
