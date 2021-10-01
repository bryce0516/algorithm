function solution(s) {
  const splitArr = s.split(" ");
  const answer = splitArr
    .reduce(
      ([min, max], cur, index) => {
        const MaxValue = Math.max(max, Math.max(Number(cur)));
        const MinValue = Math.min(min, Math.min(Number(cur)));
        return [MinValue, MaxValue];
      },
      [Number(splitArr[0]), Number(splitArr[0])]
    )
    .join(" ");
  return answer;
}

const value = solution("-1 -1");
console.log(value);
