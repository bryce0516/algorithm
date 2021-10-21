// function solution(files) {
//   const filter = files.reduce((acc, cur, index) => {
//     const obj = new Object();
//     const reg = /^[A-Za-z]{1,}/;
//     const reg2 = /[0-9]{1,}/;
//     const word = cur
//       .match(reg)[0]
//       .toUpperCase()
//       .split("")
//       .reduce((acc, cur) => {
//         acc += cur.charCodeAt();
//         return acc;
//       }, 0);
//     const num = Number(cur.match(reg2)[0]);
//     obj[word] = [index, num];
//     acc.push(obj);
//     return acc;
//   }, []);

//   const compare = (a, b) => {
//     let result = Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]);
//     if (Number(Object.keys(a)[0]) > Number(Object.keys(b)[0])) {
//       // console.log("if", result);
//       return result;
//     } else if (Number(Object.keys(a)[0]) < Number(Object.keys(b)[0])) {
//       // console.log("else if", result);
//       return result;
//     } else {
//       if (Object.values(a)[0][1] > Object.values(b)[0][1]) {
//         result += 1;
//       } else if (Object.values(a)[0][1] < Object.values(b)[0][1]) {
//         result -= 1;
//       }
//     }
//     return result;
//   };

//   const sorted = filter.sort(compare).map((element) => {
//     const index = Object.values(element)[0][0];
//     element = files[index];
//     return element;
//   });
//   console.log(sorted);
//   return sorted;
// }

function solution(files) {
  const firstCompare = (a, b) => {
    const uniA = a.toUpperCase();
    const uniB = b.toUpperCase();
    const reg = /^[\D]{1,}/;
    const reg2 = /[0-9]{1,5}/;
    const A = uniA.match(reg)[0];
    const B = uniB.match(reg)[0];
    const A2 = Number(a.match(reg2)[0]);
    const B2 = Number(b.match(reg2)[0]);
    console.log(A2);
    if (A > B) {
      return 1;
    } else if (A < B) {
      return -1;
    } else {
      // if (A2 > B2) {
      //   return B2- A2
      // } else if (A2 < B2) {
      //   return result2;
      // }
      return A2 - B2;
    }
  };
  const firstSorted = files.sort(firstCompare);

  console.log("firstsort", firstSorted);
  var answer = firstSorted;
  return answer;
}

// function solution(files) {
//   const firstCompare = (a, b) => {
//     const upperA = a.toUpperCase();
//     const upperB = b.toUpperCase();
//     const reg = /^[A-Za-z]{1,}/;
//     const reg2 = /[0-9]{1,}/;
//     const A = upperA.match(reg)[0];
//     const B = upperB.match(reg)[0];
//     const A2 = Number(a.match(reg2)[0]);
//     const B2 = Number(b.match(reg2)[0]);

//     if (A < B) {
//       return -2;
//     } else if (B > A) {
//       return 2;
//     } else {
//       if (A2 < B2) {
//         return -1;
//       } else if (A2 > B2) {
//         return 1;
//       }
//       return 0;
//     }
//   };

//   const firstSorted = files.sort(firstCompare);
//   console.log(firstSorted);
//   return firstSorted;
// }
// console.log(val);

solution(
  // ["a", "B", "C", "ab", "aa", "ac", "aab"]
  [
    "F-5 Freedom Fighter",
    "abc-5 Freedom Fighter",
    "acb-52 Freedom Fighter",
    "acb-53 Freedom Fighter",
    "aba-5 Freedom Fighter",
    "Fa-1 Freedom Fighter",
    "Fs-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ]
);
