function solution(numbers) {
  let answer = 0;
  const Arr = Array.from({ length: 10 }, (_, i) => i).map((element, index) => {
    // const reduValue = numbers.reduce((acc, cur, index2) => {
    //   if (cur === element) {
    //     console.log(element);
    //   }
    // }, 0);
    let chk = true;
    numbers.map((element2, index2) => {
      if (element2 === element) {
        chk = false;
      }
    });

    if (chk) {
      answer += element;
    }
  });
  return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
