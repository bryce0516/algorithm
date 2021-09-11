function solution(fees, records) {
  let arr = [];
  function getMin(date1, date2) {
    //date 예외처리
    if (date2 === -1) {
      date2 = new Date(2021, 1, 1, 23, 59).getTime();
    }
    let sec = date2 - date1;
    let min = sec / 1000 / 60;

    return min;
  }
  const recordsArr = records
    .map((element) => {
      return element.split(" ");
    })
    .map((element2) => {
      const timeSp = element2[0].replace(/:/gi, "");
      const time = timeSp.substring(0, 2);
      const min = timeSp.substring(2, 4);
      const timeOb = new Date(2021, 1, 1, time, min).getTime();
      element2[0] = timeOb;
      arr.push(element2[1]);
      return element2;
    });

  const set = [...new Set(arr)].sort();

  const filterdV = set
    .map((element) => {
      const res = recordsArr.filter((element2) => element2[1] === element);

      return (element = res);
    })
    .reduce((acc, cur, index) => {
      let chk = false;
      let mock = [];
      cur.map((element, index2) => {
        if (index2 % 2 === 0) {
          mock.push(index2);

          chk = true;
        }
      });

      let value = 0;
      if (chk) {
        mock.map((element) => {
          if (cur[element + 1] === undefined) {
            value += getMin(cur[element][0], -1);
          } else {
            value += getMin(cur[element][0], cur[element + 1][0]);
          }
        });
      }

      acc.push(
        value > fees[0]
          ? fees[1] + Math.ceil((value - fees[0]) / fees[2]) * fees[3]
          : fees[1]
      );
      return acc;
    }, []);

  var answer = filterdV;
  return answer;
}

//5000 + ⌈(334 - 180) / 10⌉ x 600 = 14600 주차요금

const value = solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);

console.log(value);
