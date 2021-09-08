function solution(table, languages, preference) {
  let filteredT = [];
  let titleArr = [];
  for (let i = 0; i < table.length; i++) {
    let newArr = table[i].split(" ");
    newArr.shift();
    titleArr.push(table[i].split(" ").shift());

    filteredT.push(newArr);
  }
  let langArr = [];
  for (const value in languages) {
    let obj = new Object();
    obj[languages[value]] = preference[value];
    langArr.push(obj);
  }

  let filterO = [];
  for (let i = 0; i < filteredT.length; i++) {
    let obj = new Object();
    for (let j = 0; j < filteredT.length; j++) {
      obj[filteredT[i][j]] = filteredT.length - j;
    }
    filterO.push(obj);
  }
  let resultArr = [];
  for (let j = 0; j < filterO.length; j++) {
    for (let i = 0; i < languages.length; i++) {
      const obj = new Object();
      obj[titleArr[j]] = langArr[i][languages[i]] * filterO[j][languages[i]];
      resultArr.push(obj);
    }
  }

  const reduArr = resultArr.reduce(
    (acc, cur, index) => {
      if (Object.keys(cur).includes("SI")) {
        if (isNaN(Object.values(cur)) !== true) {
          acc[0] += Number(Object.values(cur));
        }
      }
      if (Object.keys(cur).includes("CONTENTS")) {
        if (isNaN(Object.values(cur)) !== true) {
          acc[1] += Number(Object.values(cur));
        }
      }
      if (Object.keys(cur).includes("HARDWARE")) {
        if (isNaN(Object.values(cur)) !== true) {
          acc[2] += Number(Object.values(cur));
        }
      }
      if (Object.keys(cur).includes("PORTAL")) {
        if (isNaN(Object.values(cur)) !== true) {
          acc[3] += Number(Object.values(cur));
        }
      }
      if (Object.keys(cur).includes("GAME")) {
        if (isNaN(Object.values(cur)) !== true) {
          acc[4] += Number(Object.values(cur));
        }
      }
      return acc;
    },
    [0, 0, 0, 0, 0]
  );
  const max = reduArr.reduce((acc, cur, index) => {
    return acc > cur ? acc : cur;
  });
  let compareArr = [];

  for (let i = 0; i < reduArr.length; i++) {
    if (reduArr[i] === max) {
      compareArr.push(titleArr[i]);
    }
  }

  var answer = compareArr.sort()[0];

  return answer;
}

const re = solution(
  [
    "SI JAVA JAVASCRIPT SQL PYTHON C#",
    "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
    "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
    "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
    "GAME C++ C# JAVASCRIPT C JAVA",
  ],
  ["JAVA", "JAVASCRIPT"],
  [7, 5]
);

// function solution(table, languages, preference) {
//   return table
//     .map((r) => r.split(" "))
//     .map((t) => [...t.splice(0, 1), t])
//     .map(([t, arr]) => [
//       t,
//       languages.reduce((acc, l, i) => {
//         acc +=
//           (5 - (arr.indexOf(l) === -1 ? 5 : arr.indexOf(l))) * preference[i];
//         return acc;
//       }, 0),
//     ])
//     .sort((a, b) => b[1] - a[1] - (a[0] < b[0]))[0][0];
// }

// function solution(table, languages, preference) {
//   const languagePreference = languages.reduce((dic, t, i) => {
//     dic[t] = preference[i];
//     return dic;
//   }, {});

//   const result = table
//     .map((t) => t.split(" "))
//     .map((t) => {
//       const [job, ...language] = t;

//       const score = language.reduce(
//         (sum, t, i) =>
//           sum + (language.length - i) * (languagePreference[t] || 0),
//         0
//       );
//       return { job, score };
//     })
//     .sort((t1, t2) =>
//       t2.score !== t1.score ? t2.score - t1.score : t1.job.localeCompare(t2.job)
//     )
//     .shift();

//   return result.job;
// }
