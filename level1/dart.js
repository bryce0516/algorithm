// function solution(dartResult) {
//   const arr = dartResult.split("");

//   let dummy = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Number.isInteger(Number(arr[i]))) {
//       let chk = true;
//       for (let j = 0; j < dummy.length; j++) {
//         if (i - 1 === dummy[j]) {
//           chk = false;
//         }
//       }
//       if (chk) {
//         dummy.push(i);
//       }
//     }
//   }

//   const parse = [];
//   for (let i = 0; i < dummy.length; i++) {
//     let value;
//     if (dummy[i + 1] === undefined) {
//       value = dartResult.substring(dummy[i], dummy[arr.length]);
//     } else if (dummy[i] + 1 === dummy[i + 1]) {
//       value = dartResult.substring(dummy[i], dummy[i + 2]);
//     } else {
//       value = dartResult.substring(dummy[i], dummy[i + 1]);
//     }

//     parse.push(value);
//   }
//   console.log("beforeparse", parse);
//   let regexForS = /S/i;
//   let regexForD = /D/i;
//   let regexForT = /T/i;
//   let regexForA = /[*]/i;
//   let regexForSh = /[#]/i;
//   let regexFornum = /^[0-9]+$/;
//   let mock = [];
//   for (let i = 0; i < parse.length; i++) {
//     let num = Number(parse[i].substring(0, 1));
//     if (parse[i].substring(0, 2) === "10") {
//       num = 10;
//     }
//     let type = 0;
//     if (parse[i].includes("*")) {
//       const trans = parse[i].replace(regexForA, "*2");
//       parse[i] = "*2+".concat("", trans);
//       if (parse[i - 1] === undefined) {
//         type = 1;
//       } else {
//         mock[i - 1] = mock[i - 1] * 2;
//         type = 1;
//       }
//     }

//     if (parse[i].includes("S")) {
//       parse[i] = parse[i].replace(regexForS, "**1");
//       num = num ** 1;
//     }
//     if (parse[i].includes("D")) {
//       parse[i] = parse[i].replace(regexForD, "**2");
//       num = num ** 2;
//     }
//     if (parse[i].includes("T")) {
//       parse[i] = parse[i].replace(regexForT, "**3");
//       num = num ** 3;
//     }

//     if (type === 1) {
//       num = num * 2;
//     }
//     console.log(num);
//     if (parse[i].includes("#")) {
//       parse[i] = parse[i].replace(regexForSh, "*-1");
//       num = num * -1;
//     }
//     mock.push(num);
//   }

//   const redu = mock.reduce((a, b) => {
//     return a + b;
//   }, 0);

//   var answer = redu;
//   return answer;
// }

function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { "*": 2, "#": -1, "": 1 };

  let darts = dartResult.match(/\d.?\D/g);

  console.log(darts);
  // for (let i = 0; i < darts.length; i++) {
  //   let split = darts[i].match(/(\\d{1,})([SDT])([*#]?)/),
  //     score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

  //   if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

  //   darts[i] = score;
  // }

  // return darts.reduce((a, b) => a + b);
}

solution("1S2D*3T");

// function solution(dartResult) {
//   const bonus = { S: 1, D: 2, T: 3 };
//   let darts = dartResult.match(/\\d.?\\D/g);

//   for (let i = 0; i < darts.length; i++) {
//     let split = darts[i].match(/(\\d{1,})([SDT])([*#])?/),
//       score = Math.pow(split[1], bonus[split[2]]);

//     if (split[3] !== undefined) {
//       if (split[3] === "*") {
//         score *= 2;

//         if (i > 0) darts[i - 1] *= 2;
//       } else score *= -1;
//     }

//     darts[i] = score;
//   }

//   return darts.reduce((a, b) => a + b);
// }
