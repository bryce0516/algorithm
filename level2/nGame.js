function solution(n, t, m, p) {
  const mkArr = Array.from({ length: t * m }, (_, i) =>
    i.toString(n).toUpperCase()
  )
    .join("")
    .split("")
    .filter((element2, index2) => index2 % m === p - 1)
    .join("")
    .slice(0, t);

  return mkArr;
}

// while (true) {
//   const change = index.toString(n);
//   pushWhole.push(change);
//   const target = pushWhole
//     .join("")
//     .split("")
//     .filter((element, index2) => index2 % m === p - 1)
//     .map((element3, index3) => {
//       // console.log("this is element === >", element3, index3);
//       return element3;
//     });
//   answer = target;
//   // console.log("this is target ===> ", target);
//   if (target.length >= t) {
//     break;
//   }
//   index++;
// }
// const answer2 = answer.map((element) => element.toUpperCase()).join("");
// .slice(0, t);
// console.log("this is answer2", answer2);
// return answer2;
// }

// function solution(n, t, m, p) {
//   let index = 0;
//   let pushWhole = [];
//   let answer = [];
//   let memo = {};
//   while (true) {
//     const change = index.toString(n).toUpperCase();
//     console.log("this is change==>", change);
//     pushWhole.push(change);
//     const target = pushWhole
//       .join("")
//       .split("")
//       .filter((element, index2) => index2 % m === p - 1)
//       .join("")
//       .slice(0, t);
//     answer = target;

//     if (target.length >= t) {
//       break;
//     }
//     index++;
//   }
//   const answer2 = answer;
//   return answer2;
// }

const t = solution(2, 4, 2, 1);
console.log(t);

// function solution(n, t, m, p) {
//   let index = 0;
//   let pushWhole = [];
//   let answer = [];
//   let memo = {};
//   while (true) {
//     const change = index.toString(n).toUpperCase();
//     console.log("this is change==>", change);
//     pushWhole.push(change);
//     const target = pushWhole
//       .join("")
//       .split("")
//       .filter((element, index2) => index2 % m === p - 1)
//       .join("")
//       .slice(0, t);
//     answer = target;

//     if (target.length >= t) {
//       break;
//     }
//     index++;
//   }
//   const answer2 = answer;
//   return answer2;
// }
