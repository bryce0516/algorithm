function solution(n, info) {
  const allPoint = Array.from({ length: 10 }, (_, i) => 10 - i);

  for (let i = 0; i < allPoint.length; i++) {
    for (let j = 1; j < allPoint.length - 1; j++) {
      console.log(i, j);
    }
  }
  const infoArr = info.map((element, index) => {
    let obj = new Object();
    obj[info.length - 1 - index] = element;
    return obj;
  });

  const totalPoint = infoArr.reduce((acc, cur, index) => {
    if (Object.values(cur)[0] !== 0) {
      acc += Number(Object.keys(cur)[0]);
    }
    return acc;
  }, 0);

  console.log(infoArr, totalPoint);
  var answer = [];
  return answer;
}

solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
