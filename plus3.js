console.log("works");

function solution(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const answer =
    a === b
      ? a
      : Array.from({ length: max - min + 1 }, (v, i) => i + min).reduce(
          (acc, cal) => {
            return acc + cal;
          }
        );

  return answer;
}

console.log();
solution(2, 5);
