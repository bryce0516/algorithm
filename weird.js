// function solution(s) {
//   if (s.length === 0) {
//     return "";
//   }
//   const arr = s.toLowerCase().split("");
//   let index = 0;
//   let index2 = 0;
//   const arr2 = [];
//   while (index2 < arr.length) {
//     if (arr[index2] === " ") {
//       index = -1;
//     }
//     if (index % 2 === 0) {
//       arr2.push(arr[index2].toUpperCase());
//     } else {
//       arr2.push(arr[index2]);
//     }

//     index++;
//     index2++;
//   }

//   return arr2.join("");
// }

function solution(s) {
  console.log(
    s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
      return a[0].toUpperCase() + a[1].toLowerCase();
    })
  );
  // if (s.length === 0) {
  //   return "";
  // }
  // const arr = s.toLowerCase().split("");
  // let index = 0;
  // let index2 = 0;
  // const arr2 = [];
  // while (index2 < arr.length) {
  //   if (arr[index2] === " ") {
  //     index = -1;
  //   }
  //   if (index % 2 === 0) {
  //     arr2.push(arr[index2].toUpperCase());
  //   } else {
  //     arr2.push(arr[index2]);
  //   }

  //   index++;
  //   index2++;
  // }

  // return arr2.join("");
}
const value = solution("try hello world");
// console.log(value);
