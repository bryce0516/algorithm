function solution(n, lost, reserve) {
  const Narr = Array.from({ length: n }, (_, i) => {
    let obj = new Object();
    obj[i] = 1;
    return obj;
  }).reduce((acc, cur, index) => {
    let num = 1;
    let key = Number(Object.keys(cur)) + 1;

    for (let j = 0; j < reserve.length; j++) {
      if (Number(key) === reserve[j]) {
        num += 1;
      }
    }
    for (let j = 0; j < lost.length; j++) {
      if (Number(key) === lost[j]) {
        num -= 1;
      }
    }
    acc += num;
    return acc;
  }, 0);

  console.log(Narr);
  let answer = Narr > n ? n : Narr;
  // const redu1 = Narr.reduce((acc, cur, index) => {
  //   let obj = new Object();
  //   obj[index] = 1;
  //   acc.push(obj);
  //   return acc;
  // }, []);
  // console.log(redu1);
}
solution(5, [2, 4], [1, 3, 5]);
