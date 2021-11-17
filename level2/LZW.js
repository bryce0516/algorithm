// function solution(msg) {
//   const arr = Array.from({ length: 26 }, (_, i) => {
//     return [String.fromCharCode(65 + i), i + 1];
//   });
//   let mock = [];
//   let mock2 = [];

//   let initialIndex = 0;
//   let initialIndex2 = 1;
//   let initialString = msg.substring(initialIndex, initialIndex2);

//   const recursive = (string, start, end, current, inputedCheck) => {
//     console.log(current, string, start, end, inputedCheck);
//     if (current >= msg.length + 1) return;

//     let check = false;
//     let beforeData;
//     arr.map((element, index) => {
//       if (element[0] === string) {
//         beforeData = element;
//         check = true;
//       }
//     });

//     console.log("check", check, beforeData);
//     if (check === true) {
//       end++;
//       current++;
//       inputedCheck = beforeData;
//       if (current === msg.length) {
//         mock.push(beforeData[1]);
//       }
//       let trueString = msg.substring(start, end);
//       return recursive(trueString, start, end, current, beforeData);
//     } else if (check === false) {
//       start = current;
//       // start = start + (end - current);
//       if (inputedCheck) {
//         mock.push(inputedCheck[1]);
//       }

//       if (beforeData === undefined && inputedCheck !== undefined) {
//         arr.push([string, arr.length + 1]);
//       }
//       let falseString = msg.substring(start, end);
//       return recursive(falseString, start, end, current, undefined);
//     }

//     // return recursive(string, start, end);
//   };

//   recursive(initialString, initialIndex, initialIndex2, 0, null);
//   return mock;
// }

function solution(msg) {
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((dict, c, i) => {
    dict[c] = i + 1;
    return dict;
  }, {});
  dict.nextId = 27;
  const ans = [];
  for (let i = 0, j = 0; i < msg.length; i = j) {
    j = msg.length;
    console.log(i, j);
    let longest = "";
    while (dict[(longest = msg.substring(i, j))] === undefined) {
      --j;
    }
    ans.push(dict[longest]);
    dict[longest + msg[j]] = dict.nextId++;
    console.log("this is longest", longest, msg[j]);
  }
  console.log(dict, ans);
  return ans;
}

solution("KAKAO");
const arr = [1, 1, 1, 1, 1];
for (let i = 0, j = 0; i < arr.length; i = j) {
  j = arr.length;
  console.log("inner for", i, j);
}
