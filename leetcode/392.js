/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function (s, t) {
//   const arr1 = s.split("");
//   const arr2 = t.split("");

//   let sIndex = 0;
//   let tIndex = 0;
//   while (tIndex < t.length) {
//     if (arr1[sIndex] === arr2[tIndex]) {
//       sIndex++;
//     }
//     tIndex++;
//   }
//   return sIndex === t.length ? true : false;
// };

// var isSubsequence = function (s, t) {
//   if (s === "") return true;
//   if (t == "") return false;
//   console.log("~~~~~~~~~~~~~~~", s, t);
//   if (s[s.length - 1] === t[t.length - 1]) {
//     console.log(">>>>>>>>>> if");
//     return isSubsequence(
//       s.substring(0, s.length - 1),
//       t.substring(0, t.length - 1)
//     );
//   } else {
//     console.log("<<<<<<<<<< else");
//     return isSubsequence(s, t.substring(0, t.length - 1));
//   }
// };

// var isSubsequence = function (s, t) {
//   function matrix(rows, columns) {
//     const rtn = new Array(rows);

//     for (let i = 0; i < rows; i++) {
//       rtn[i] = new Array(columns);
//     }

//     return rtn;
//   }

//   let rows = s.length + 1,
//     columns = t.length + 1;
//   const array = matrix(rows, columns);
//   if (s.length == 0) return true;

//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 1; j <= t.length; j++) {
//       if (s.charAt(j - 1) == t.charAt(i - 1)) {
//         array[j][i] = array[j - 1][i - 1] + 1;
//       } else {
//         array[j][i] = Math.max(array[j][i - 1], array[j - 1][i]);
//       }
//     }
//     if (array[s.length][i] === s.length) {
//       return true;
//     }
//   }
//   return false;
// };

const answer = isSubsequence((s = "acb"), (t = "ahbgc"));
