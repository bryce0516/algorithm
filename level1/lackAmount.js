function solution(price, money, count) {
  let amount = 0;
  for (let i = 1; i < count + 1; i++) {
    amount += price * i;
  }

  var answer = amount - money > 0 ? amount - money : 0;

  return answer;
}

const result = solution(3, 20, 4);
console.log(result);
