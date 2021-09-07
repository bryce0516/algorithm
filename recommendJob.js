function solution(table, languages, preference) {
  let filteredT = [];
  let titleArr = [];
  for (let i = 0; i < table.length; i++) {
    let newArr = table[i].split(" ");
    newArr.shift();
    titleArr.push(table[i].split(" ").shift());
    let obj = new Object();

    filteredT.push(newArr);
  }

  // const value = filteredT.map((element, index1) =>
  //   element.map((element2, index2) => )
  // );
  let filterO = [];
  for (let i = 0; i < filteredT.length; i++) {
    let obj = new Object();
    for (let j = 0; j < filteredT.length; j++) {
      obj[filteredT[i][j]] = filteredT.length - j;
    }
    filterO.push(obj);
    // console.log(filteredT[i], filteredT.length);
  }
  console.log(filterO[0]);
  // console.log(filteredT, titleArr);
  // console.log(languages);
  // console.log(preference);
  var answer = "";
  return answer;
}

solution(
  [
    "SI JAVA JAVASCRIPT SQL PYTHON C#",
    "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
    "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
    "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
    "GAME C++ C# JAVASCRIPT C JAVA",
  ],
  ["PYTHON", "C++", "SQL"],
  [7, 5, 5]
);
