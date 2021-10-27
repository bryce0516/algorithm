function solution(msg) {
  const arr = Array.from({ length: 26 }, (_, i) => {
    // return String.fromCharCode(65 + i);
    const obj = new Object();
    obj[String.fromCharCode(65 + i)] = i + 1;
    return obj;
  });

  const set = new Set([...arr]);
  console.log(set, "this is key");
  for (let [item] of set.entries()) {
    console.log("item : ", Object.keys(item)[0]);
  }
  const target = msg.split("");

  // console.log("this is value", value);
  const redu = target.reduce((acc, cur, index) => {
    // // console.log(Object.values(cur));
    // let findVal = arr.find((element) => Object.keys(element)[0] === cur);

    const firstAdd = target[index] + target[index + 1];
    // const firstAdd = "A";
    for (let [item] of set.entries()) {
      if (firstAdd === Object.keys(item)[0]) {
        console.log("exist", Object.keys(item)[0]);
        break;
      }
      const obj = new Object();
      obj[firstAdd] = set.size() + 1;
      set.add(obj);
    }

    // if (firstAdd)
    // if(firstAdd )
    // if (index === 0) {
    //   acc.push(Object.values(findVal)[0]);
    //   const obj = new Object();
    //   const firstAdd = target[index] + target[index + 1];
    //   obj[firstAdd] = arr.length + 1;
    //   arr.push(obj);
    // } else {
    // }

    // console.log(findVal);
    return acc;
  }, []);

  // console.log(arr);
  // const answer = redu;
  // return answer;
}

solution("KAKAO");
