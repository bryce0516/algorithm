// function solution(s) {
//   const arr = s.split("");

//   const recursion = (array, start) => {
//     if (start === s.length) {
//       return array.length;
//     }
//     if (array.length === 0) {
//       return array.length;
//     }

//     let index = 0;
//     let test;
//     // console.log("before array, start", start, array);
//     while (true) {
//       if (array[index] === "(" && array[index + 1] === ")") {
//         test = array.splice(index, 2);
//         break;
//       }

//       if (index === array.length) {
//         break;
//       }
//       index++;
//     }

//     // console.log("test check", test, index, array);

//     return recursion(array, start + 1);
//   };
//   const value = recursion(arr, 0);
//   const answer = value === 0 ? true : false;
//   return answer;
// }

function solution(s) {
  const arr = [...s];
  let index = 0;
  while (true) {
    if (index === arr.length) {
      console.log("end1");
      break;
    }

    if (arr[index] === "(" && arr[index + 1] === ")") {
      test = arr.splice(index, 2);
      console.log("first index", index);
      index = 0;
    }
    console.log(index, arr.length, arr);

    index++;
  }
  const answer = arr[0] === ")" ? false : arr.length % 2 === 0 ? true : false;
  return answer;
}

const val = solution(")()(");

console.log("answer", val);
