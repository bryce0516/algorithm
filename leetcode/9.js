// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// let isPalindrome = function (x) {
//   const origin = x.toString();
//   const arr = origin.split("");
//   const reversed = arr.slice().reverse();

//   if (arr.join("") === reversed.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// };

let isPalindrome = function (x) {
  const origin = x.toString();
  const standard = Math.ceil(origin.length / 2);
  for (let i = 0; i < standard; i++) {
    // console.log(i, origin.length - 1 - i, standard);
    if (origin[i] !== origin[origin.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const result = isPalindrome(11121);

console.log(result);
