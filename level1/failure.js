function solution(N, stages) {
  let j = 0;
  let mock2 = [];
  for (let i = 1; i < N + 1; i++) {
    let get = [];
    let didnt = [];
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        get.push(stages[j]);
      }
      if (i <= stages[j]) {
        didnt.push(stages[j]);
      }
    }
    let failureRating = get.length / didnt.length;

    mock2.push({ state: i, fail: failureRating });
  }
  const compare = (a, b) => {
    return Object.values(b)[1] - Object.values(a)[1];
  };
  const sortArr = mock2
    .sort(compare)
    .map((element) => (element = element.state));
  return sortArr;
}

const value = solution(4, [4, 4, 4, 4, 4]);

console.log("this is value", value);

// function solution(N, stages) {
//   let ans = [];

//   for (let i = 1; i <= N; ++i) {
//     let usersReachedCurrentStage = stages.reduce(
//       (acc, curStage) => acc + (curStage >= i ? 1 : 0),
//       0
//     );
//     let usersStagnatedCurrentStage = stages.reduce(
//       (acc, curStage) => acc + (curStage == i ? 1 : 0),
//       0
//     );
//     if (usersReachedCurrentStage === 0) {
//       ans.push({ stage: i, failRate: 0 });
//       continue;
//     }

//     ans.push({
//       stage: i,
//       failRate: usersStagnatedCurrentStage / usersReachedCurrentStage,
//     });
//   }

//   return ans
//     .sort((a, b) => {
//       if (a.failRate > b.failRate) return -1;
//       if (a.failRate < b.failRate) return 1;
//       return a.stage - b.stage;
//     })
//     .map((entry) => entry.stage);
// }
