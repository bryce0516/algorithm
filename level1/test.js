function solution(answers) {
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const re = arr
    .map((element, index) => {
      const value = answers.filter(
        (element2, index2) => element2 === element[index2 % element.length]
      ).length;
      const obj = new Object();
      obj[index] = value;
      return obj;
    })
    .filter((element) => Object.values(element)[0] !== 0);

  const maxValue = Object.values(
    re.reduce((acc, cur) => {
      if (Object.values(acc)[0] > Object.values(cur)[0]) {
        return acc;
      } else {
        return cur;
      }
    })
  )[0];
  const filterV = re
    .filter((element) => Object.values(element)[0] === maxValue)
    .map((element) => (element = Number(Object.keys(element)[0])) + 1);

  return filterV;
}

const val = solution([1, 3, 2, 4, 2]);
