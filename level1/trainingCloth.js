function solution(n, lost, reserve) {
  // const Narr = Array.from({ length: n }, (_, i) => {
  //   let obj = new Object();
  //   obj[i] = 1;
  //   console.log("this is obj", obj);
  //   return obj;
  // })
  // .reduce(
  //   (acc, cur, index) => {
  //     let num = 1;
  //     let key = Number(Object.keys(cur)) + 1;
  //     console.log(acc, cur);
  //     for (let j = 0; j < reserve.length; j++) {
  //       if (Number(key) === reserve[j]) {
  //         num += 1;
  //       }
  //     }
  //     for (let j = 0; j < lost.length; j++) {
  //       if (Number(key) === lost[j]) {
  //         num -= 1;
  //       }
  //     }
  //     acc += num;
  //     return acc;
  //   },
  //   0
  // );
  const reserveArr = reserve.map((element1, index1) => {
    lost.filter((element2, index2) => element2 - 1 !== element1);
  });
  console.log(reserveArr);
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (lost[j] === reserve[i] + 1) {
        console.log("want remove index", i, "item", reserve[i]);
      } else if (lost[j] === reserve[i] - 1) {
      }

      console.log(reserve[i], lost[j]);
    }
  }
  const concatArray = lost.concat(reserve);
  // console.log(concatArray);
  const Narr = Array.from({ length: n }, (_, i) => 1).reduce(
    (acc, cur, index) => {
      // for (let j = 0a; j < reserve.length; j++) {
      //   if (reserve[j] === index + 1) {
      //     cur += 1;
      //   }
      // }
      // for (let k = 0; k < lost.length; k++) {
      //   if (lost[k] === index + 1) {
      //     cur -= 1;
      //   }
      // }

      // if(cur === 0) {

      // }

      // console.log("have status:", index + 1, "how many", cur, "before", acc);
      acc.push(cur);

      // console.log("final", acc);
      return acc;
    },
    []
  );

  let answer = Narr > n ? n : Narr;
  console.log("answer", answer);
  // const redu1 = Narr.reduce((acc, cur, index) => {
  //   let obj = new Object();
  //   obj[index] = 1;
  //   acc.push(obj);
  //   return acc;
  // }, []);
  // console.log(redu1);
}
solution(4, [3], [2, 4]);
