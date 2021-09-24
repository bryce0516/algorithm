function solution(lottos, win_nums) {
  const ranking = [6, 5, 4, 3, 2, 1];
  let point = 0;
  let minPoint = 0;
  const firstCheck = lottos.map((element, index) => {
    win_nums.map((element2, index2) => {
      if (element === element2) {
        point += 1;
        minPoint += 1;
      }
    });
    if (element === 0) {
      point += 1;
    }
  });

  if (point === 0) {
    point = 1;
  }
  if (minPoint === 0) {
    minPoint = 1;
  }
  var answer = [ranking.indexOf(point) + 1, ranking.indexOf(minPoint) + 1];
  return answer;
}

const value = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
console.log(value);
