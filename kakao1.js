function solution(id_list, report, k) {
  report = [...new Set(report)];
  const resultArr = Array.from({ length: id_list.length }, (_, i) => {
    let obj = new Object();
    obj[id_list[i]] = [0];
    return obj;
  });
  const resultArr2 = Array.from({ length: id_list.length }, (_, i) => 0);

  const splitArr = report
    .map((element, index) => (element = element.split(" ")))
    .reduce((acc, cur, index2) => {
      let num = 0;
      let mock = [];

      for (let i = 0; i < id_list.length; i++) {
        if (Object.keys(acc[i])[0] === cur[0]) {
          Object.values(acc[i])[0].push(cur[1]);
        }
        if (Object.keys(acc[i])[0] === cur[1]) {
          Object.values(acc[i])[0][0] += 1;
        }
      }

      return acc;
    }, resultArr);

  let target = [];
  splitArr.map((element, index) => {
    if (Object.values(element)[0][0] >= k) {
      target.push(Object.keys(element)[0]);
    }
  });

  target.map((element, index) => {
    splitArr.map((element2, index2) => {
      if (Object.values(element2)[0].includes(element)) {
        resultArr2[index2] += 1;
      }
    });
  });

  var answer = resultArr2;
  return answer;
}

const value = solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

console.log(value);
