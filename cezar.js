const data = "abcdefghijklmnopqrstuvwxyz";
const data1 = data.split("");

function solution(s, n) {
  const regex = /[A-Z]/g;
  const upper = s
    .split("")
    .map((element, index) => {
      if (element.match(regex) !== null) {
        return index;
      }
    })
    .filter((element) => element !== undefined);

  const lowers = s.toLowerCase();
  const lowersSplit = lowers.split("");
  let i = 0;
  let index = [];
  let rest;
  while (lowersSplit.length > i) {
    let chk = false;
    for (let j = 0; j < data1.length; j++) {
      if (lowersSplit[i] === data1[j]) {
        if (j + n > 25) {
          rest = (j + n) % 25;
          for (const a of upper) {
            if (a === i) {
              chk = true;
            }
          }
          if (chk) {
            index.push(data1[rest - 1].toUpperCase());
          } else {
            index.push(data1[rest - 1]);
          }
        } else {
          rest = j + n;
          for (const a of upper) {
            if (a === i) {
              chk = true;
            }
          }
          if (chk) {
            index.push(data1[rest].toUpperCase());
          } else {
            index.push(data1[rest]);
          }
        }
      }
    }
    if (lowersSplit[i] === " ") {
      index.push(" ");
    }
    i++;
  }

  return index.join("");
}

const re = solution("AB", 1);
