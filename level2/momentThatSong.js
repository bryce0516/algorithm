let solution = function (m, musicinfos) {
  const data = {
    0: "C#",
    1: "D#",
    2: "F#",
    3: "G#",
    4: "A#",
    5: "C",
    6: "D",
    7: "E",
    8: "F",
    9: "G",
    10: "A",
    11: "B",
  };
  let answer = [];
  for (let i = 0; i < musicinfos.length; i++) {
    const arr = musicinfos[i].replace(/"/g, "").split(",");

    const beforeTime = new Date(`March 13, 08 ${arr[0]}`).getTime();
    const afterTime = new Date(`March 13, 08 ${arr[1]}`).getTime();
    const betweenTime = ((afterTime - beforeTime) * 0.001) / 60;
    const title = arr[2];
    const lyric = arr[3];
    const filteredLyric = lyric.split("");
    let target = [];
    for (let i = 0; i < filteredLyric.length; i++) {
      if (filteredLyric[i] === "#") {
        target[i - 1] = filteredLyric[i - 1].concat(["#"]);
      } else {
        target.push(filteredLyric[i]);
      }
    }
    let inputedArr = m.split("");
    let target2 = [];
    for (let i = 0; i < inputedArr.length; i++) {
      console.log(i);
      if (inputedArr[i] === "#") {
        target2[i - 1] = inputedArr[i - 1].concat(["#"]);
      } else {
        target2.push(inputedArr[i]);
      }
    }
    console.log(target, target2);
    let newArr = [];
    for (let i = 0; i < betweenTime; i++) {
      newArr[i] = target[i % target.length];
    }
    let result = [];
    let result2 = [];
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < target2.length; j++) {
        if (newArr[i] === target2[j]) {
          result.push(i);
        }
      }
    }
    console.log("%%%", result.length % target2.length);
    if (result.length % target2.length === 0) {
      answer.push(title);
    }
  }

  if (answer !== 0) {
    return answer[0];
  } else {
    return "(None)";
  }
};

const value = solution("CC#BCC#BCC#BCC#B", [
  "03:00,03:30,FOO,CC#B",
  "04:00,04:08,BAR,CC#BCC#BCC#B",
]);
console.log(value);

// const letter = "CC#BCC#BCC#BCC#B";
// let target2 = [];
// const arr = letter.split("");
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "#") {
//     target2[i - 1] = arr[i - 1].concat(["#"]);
//   } else {
//     target2.push(arr[i]);
//   }
// }

// console.log(target2);
