const data = "abcdefghijklmnopqrstuvwxyz";
const data1 = data.split("");

function solution(s, n) {
  const leng = s.length;
  const lowers = s.toLowerCase();
  const first = lowers.split("")[0];
  const regex = /[A-Z]/g;
  const found = s.match(regex);

  let index = [];
  if (found !== null) {
    for (let k = 0; k < found.length; k++) {
      let chk = s.indexOf(found[k]);
      if (chk) {
        index.push(chk);
      }
    }
  }

  const indexof = data.indexOf(first);
  function rest(indexof) {
    let rest = indexof;
    if (indexof > 25) {
      rest = indexof % 25;
      return rest - 1;
    } else {
      return rest;
    }
  }

  let i = rest(indexof + n);
  let result = data.slice(i, i + leng);
  let chekc = result.split("");
  const trans = (result, remain) => {
    const eliminated = remain.shift();

    for (let i = 0; i < chekc.length; i++) {
      if (i === eliminated) {
        result[i] = result[i].toUpperCase();
      }
    }
    if (remain.length === 0) {
      return result;
    }
    return trans(result, remain);
  };

  let value = trans(chekc, index);
  const answer = value.join("");

  console.log(answer);
  return answer;
}

const func = solution("z", 1);
