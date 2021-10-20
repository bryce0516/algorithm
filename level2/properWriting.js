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
  if (arr[0] === ")") return false;
  if (arr[arr.length - 1] === "(") return false;
  const redu = arr.reduce(
    (acc, cur, index) => {
      if (cur === "(") {
        acc[0] += 1;
        acc[1].push(index);
      } else {
        acc[2] += 1;
        acc[3].push(index);
      }
      return acc;
    },
    [0, [], 0, []]
  );

  if (redu[1].length === redu[3].length) {
    for (let i = 0; i < redu[1].length; i++) {
      if (redu[1][i] > redu[3][i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// const val = solution("(())()");
const val = solution("()))((()");

console.log("answer", val);

// function is_pair(s) {
//   var result = s.match(/(\(|\))/g);
//   return result[0] == "(" && result.length % 2 == 0 ? true : false;
// }
