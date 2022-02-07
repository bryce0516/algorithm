function solution(id_list, report, k) {
  const newArr = Array.from(id_list, (element) => {
    //이름 신고한횟수, 신고당한횟수, 메일받은 횟수
    return [element, 0, 0, 0];
  });

  const set = Array.from(new Set([...report]));

  let fire = [];

  for (let i = 0; i < set.length; i++) {
    const splited = set[i].split(" ");
    for (let j = 0; j < newArr.length; j++) {
      if (splited[0] === newArr[j][0]) {
        newArr[j][1] += 1;
      }
      if (splited[1] === newArr[j][0]) {
        newArr[j][2] += 1;
      }
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][2] === k) {
      fire.push(newArr[i][0]);
    }
  }
  for (let i = 0; i < set.length; i++) {
    const splited = set[i].split(" ");
    for (let j = 0; j < fire.length; j++) {
      if (splited[1] === fire[j]) {
        for (let k = 0; k < newArr.length; k++) {
          if (newArr[k][0] === splited[0]) {
            newArr[k][3] += 1;
          }
        }
      }
    }
  }
  console.log(report);
  console.log(newArr);
  const answer = newArr.map((element) => element[3]);

  return answer;
}
//first 20.8

// function solution(id_list, report, k) {
//   const set = Array.from(new Set([...report]));
//   const splited = set.map((element) => element.split(" "));
//   console.log(splited);

//   const tree = (reporter, reported) => {
//     console.log(reporter, reported);
//   };

//   splited.map(([element0, element1], index) => {
//     tree(element0, element1);
//   });
// }

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
// for (let i = 0; i < report.length; i++) {

//   const splited = report[i].split(" ");
//   for (let j = 0; j < newArr.length; j++) {
//     const key = Object.keys(newArr[j])[0];
//     if (key === splited[0]) {
//       const value = Object.values(newArr[j])[0];
//       value.push(splited[1]);
//       console.log("this is value", value);
//     }
//   }
// }
