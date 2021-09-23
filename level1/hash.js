// function solution(participant, completion) {
//   const arr = participant.concat(completion);
//   const set = [...new Set(arr)];
//   let newPar = set.map((element) => {
//     element = [element, 0];
//     return element;
//   });
//   console.log(arr, set);
//   const redu = arr
//     .reduce((acc, cur) => {
//       acc.map((element) => {
//         if (element[0] === cur) {
//           element[1] += 1;
//         }
//       });

//       return acc;
//     }, newPar)
//     .filter((element) => element[1] % 2 !== 0)[0][0];

//   return redu;
// }

// const value = solution(
//   ["mislav", "stanko", "mislav", "ana", "ana"],
//   ["mislav", "stanko", "mislav", "ana"]
// );

// function solution(participant, completion) {
//   const arr = participant.concat(completion);
//   const set = [...new Set(arr)];

//   const mock = Array.from({ length: set.length }, (_, i) => 0);

//   for (let i = 0; i < set.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (set[i] === arr[j]) {
//         mock[i] += 1;
//       }
//     }
//   }
//   const answer = set[mock.findIndex((element) => element % 2 !== 0)];
//   return answer;
// }

// const value = solution(
//   ["mislav", "stanko", "mislav", "ana", "ana"],
//   ["mislav", "stanko", "mislav", "ana"]
// );

function solution(participant, completion) {
  const sortPar = participant.sort();
  const sortCom = completion.sort();
  let mock = [];
  for (let i = 0; i < sortPar.length; i++) {
    if (participant[i] !== sortCom[i]) {
      mock.push(participant[i]);
    }
  }
  let answer = mock[0];
  return answer;
}

const value = solution(
  // ["leo", "kiki", "eden"],
  // ["eden", "kiki"]
  ["mislav", "stanko", "mislav", "ana", "ana"],
  ["mislav", "stanko", "mislav", "ana"]
);
console.log(value);
