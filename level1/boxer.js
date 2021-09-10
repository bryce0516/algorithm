// function solution(weights, head2head) {
//   const mock = [];

//   let standard = "";
//   for (let i = 0; i < head2head.length; i++) {
//     standard += "N";
//   }
//   let standardArr = [];

//   head2head.map((element, index) => {
//     if (element === standard) {
//       standardArr.push(element === standard);
//     }
//     let obj = new Object();
//     element.split("").map((element2, index2) => {
//       obj[weights[index2]] = element2;
//     });
//     mock.push(obj);
//   });

//   const findStand = standardArr.indexOf(true);

//   let reulstArr = [];
//   let chart = [];

//   for (const index in mock) {
//     let point = 0;
//     for (const [key, value] of Object.entries(mock[index])) {
//       if (value === "W") {
//         point += Number(key);
//       } else {
//         point += 0;
//       }
//     }
//     chart.push(point);
//   }
//   let copyChart = findStand === -1 ? chart : weights;
//   const recursive = (resive) => {
//     if (resive.length === 0) {
//       return;
//     }
//     let redu = resive.reduce((acc, cur, index) => (acc > cur ? acc : cur));
//     let remain;
//     for (let i = 0; i < copyChart.length; i++) {
//       if (copyChart[i] === redu) {
//         reulstArr.push(i + 1);
//         remain = resive.filter((element) => element !== redu);
//       }
//     }

//     return recursive(remain);
//   };

//   if (findStand === -1) {
//     recursive(chart);
//   } else {
//     recursive(weights);
//   }

//   var answer = reulstArr;

//   return answer;
// }

// function solution(weights, head2head) {
//   const mock = [];
//   head2head.map((element, index) => {
//     let mock2 = [];
//     element.split("").map((element2, index2) => {
//       let obj = new Object();
//       obj[weights[index2]] = element2;
//       mock2.push(obj);
//     });
//     mock.push(mock2);
//   });
//   console.log("this is mock", mock);
//   const ccdc = mock.map((element, index) => {
//     let WinningNum = 0;
//     const reduval = element.reduce((acc, cur, index2) => {
//       for (const [key, value] of Object.entries(cur)) {
//         console.log("\nkey", key, +"\n", "value", value, index2, index);

//         if (value === "W") {
//           acc += Number(key);
//           WinningNum += 1;
//         } else if (index === index2) {
//           const newkey = (Number(key.substr(0, key.length - 1)) * 10) / 100;
//           acc += newkey;
//         }
//       }
//       console.log("this iscur", cur);
//       return acc;
//     }, 0);

//     console.log("this is winningNum", WinningNum);
//     let obj = new Object();
//     // obj[WinningNum] = reduval;
//     Object.assign(obj, { point: reduval });
//     Object.assign(obj, { WinningNum });
//     Object.assign(obj, { index: index + 1 });
//     return obj;
//   });
//   // console.log(ccdc2);
//   console.log("this is ccdc", ccdc);

//   // const answer = ccdc.reduce(
//   //   (acc, cur) => {
//   //     return acc.WinningNum > cur.WinningNum ? acc.WinningNum : cur.WinningNum;
//   //   },
//   //   { WinningNum: 0, index: 0 }
//   // );
//   // console.log("answer", answer);
//   const sortedV = ccdc.sort((a, b) => {
//     console.log("sort", Object.values(a)[1], Object.values(b)[1]);
//     if (Object.values(a)[1] === Object.values(b)[1]) {
//       return Object.values(b)[0] - Object.values(a)[0];
//     } else {
//       return Object.values(b)[1] - Object.values(a)[1];
//     }
//   });

//   console.log(sortedV);
//   const answer = sortedV.map((element) => (element = element.index));
//   console.log(answer);
//   return answer
// }
function solution(weights, head2head) {
  let result = [];
  const wei = weights.map((element1, index1) => {
    let mock = [];
    let win = 0;
    let lose = 0;
    let overwin = 0;
    let draw = 0;
    for (let j = 0; j < head2head[index1].length; j++) {
      if (head2head[index1][j] === "N") {
        draw += 1;
      }
      if (head2head[index1][j] === "W") {
        if (weights[index1] < weights[j]) {
          overwin += 1;
        }
        win += 1;
      }
      if (head2head[index1][j] === "L") {
        lose += 1;
      }
    }

    mock = [...mock, element1, win, overwin, lose, draw, index1 + 1];

    result.push(mock);
  });

  const compare = (a, b) => {
    console.log(a[5], b[5]);
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else {
      if (a[2] > b[2]) return -1;
      else if (a[2] < b[2]) return 1;
      else {
        if (a[0] > b[0]) return -1;
        else if (a[0] < b[0]) return 1;
        else {
          if (a[5] > b[5]) return 1;
          else if (a[5] < b[5]) return -1;
          else {
            return 0;
          }
        }
      }
    }
  };
  const answer = result
    .sort(compare)
    .map((element, index) => (element = element[5]));
  return answer;
}

// function solution(weights, head2head) {
//   let result = [];

//   for (let i = 0; i < weights.length; i++) {
//     let win = 0;
//     let lose = 0;
//     let over = 0;
//     // weights[i] => 선수의 몸무게
//     // head2head[i] => 선수의 전적 (length가 같기 때문)
//     // head2head[i][j] => 각 경기의 승패
//     for (let j = 0; j < head2head[i].length; j++) {
//       // N은 아무것도 하지 않음
//       if (head2head[i][j] === "N") continue;
//       if (head2head[i][j] === "L") lose++;
//       if (head2head[i][j] === "W") {
//         // weights[i] => 선수의 몸무게
//         // weigths[j] => 대결 상대의 몸무게
//         // 대결한 상대의 몸무게가 더 크면
//         if (weights[i] < weights[j]) {
//           over++;
//         }
//         win++;
//       }
//     }
//     // 승률
//     let rate = win / (win + lose);
//     // 각 선수의 정보를 한 배열 안에 담음
//     result = [...result, [rate, over, weights[i], i + 1]];
//     console.log("win", win);
//     console.log("lose", lose);
//     console.log("over", over);
//     console.log(weights[i], i + 1);
//   }

//   // 배열을 정렬
//   result.sort((a, b) => {
//     // 승률 내림차순 정렬
//     if (a[0] > b[0]) return -1;
//     if (a[0] < b[0]) return 1;
//     // 승률이 같으면?
//     // 나보다 무거운 상대 이긴 횟수 내림차순 정렬
//     if (a[1] > b[1]) return -1;
//     if (a[1] < b[1]) return 1;
//     // 나보다 무거운 상대 이긴 횟수가 같으면?
//     // 몸무게 내림차순 정렬
//     if (a[2] > b[2]) return -1;
//     if (a[2] < b[2]) return 1;
//     // 몸무게마저 같으면?
//     // 선수 번호 오름차순 정렬
//     if (a[3] > b[3]) return 1;
//     if (a[3] < b[3]) return -1;
//     return 0;
//   });

//   // 정렬된 배열에서 선수 번호만 매핑
//   return result.map((el) => el[3]);
// }
const value = solution([60, 70, 60], ["NNN", "NNN", "NNN"]);

console.log(value);
