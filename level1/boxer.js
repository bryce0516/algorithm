function solution(weights, head2head) {
  const mock = [];
  head2head.map((element, index) => {
    let obj = new Object();
    element.split("").map((element2, index2) => {
      obj[weights[index2]] = element2;
    });
    mock.push(obj);
  });

  let chart = [];
  for (const index in mock) {
    let point = 0;
    for (const [key, value] of Object.entries(mock[index])) {
      if (value === "W") {
        point += Number(key);
      } else {
        point += 0;
      }
    }
    chart.push(point);
  }

  let copyChart = chart;

  let reulstArr = [];

  const recursive = (resive) => {
    if (resive.length === 0) {
      return;
    }
    let redu = resive.reduce((acc, cur, index) => (acc > cur ? acc : cur));
    let remain;
    for (let i = 0; i < copyChart.length; i++) {
      if (copyChart[i] === redu) {
        reulstArr.push(i + 1);
        remain = resive.filter((element) => element !== redu);
      }
    }

    return recursive(remain);
  };
  recursive(chart);

  var answer = reulstArr;
  return answer;
}

solution([50, 82, 75, 120], ["NLWL", "WNLL", "LWNW", "WWLN"]);
