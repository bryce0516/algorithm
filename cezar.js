const data = "abcdefghijklmnopqrstuvwxyz";
const data1 = data.split("");

function solution(s, n) {
  const arr = s.split("");
  const regex = /[A-Z]/g;
  const lowers = s.toLowerCase();
  const found = s.match(regex);
  const first = lowers.split("")[0];
  const value = arr.reduce((acc, cur, index) => {
    cur.match(regex);
    return index;
  });
  // console.log(found);
  let index = [];
  for (let i = 0; i < arr.length; i++) {
    let chk = arr.indexOf(found[i]);
    // console.log(found[i]);
    if (chk !== -1) {
      index.push(chk + index.length);
      const r2 = arr.splice(chk, 1);
      console.log(r2, arr, chk);
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

  let i = rest(indexof);
  let newArr = [];
  let k =
  for (let j = i; j < i + arr.length; j++) {
    
    if (j > 25) {
      
    }
  }
  console.log(data1[i]);
}

solution("wYzDsdfsdfsfD ", 1);
