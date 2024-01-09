function solution(friends, gifts) {

  let scoreMap = new Object()
  friends.map((element, index) => {
    scoreMap[element] = index
  })
  let scoreTable = Array.from({ length: friends.length }, (_) => Array(friends.length).fill(0))
  let pointMap = new Array(friends.length).fill(0)
  let result = new Array(friends.length).fill(0)
  gifts.map((element, index) => {
    const [from, to] = element.split(" ")
    const fromIndex = scoreMap[from]
    const toIndex = scoreMap[to]
    scoreTable[fromIndex][toIndex] += 1
  })

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      pointMap[i] += scoreTable[i][j]
      pointMap[i] -= scoreTable[j][i]
    }
  }
  console.log("scoreTable", scoreTable)
  console.log("pointMap", pointMap)
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if (i === j) continue;
      if (scoreTable[i][j] > scoreTable[j][i]) { result[i]++ }
      if (scoreTable[i][j] < scoreTable[j][i]) { result[j]++ }
      if (scoreTable[i][j] === scoreTable[j][i]) {
        if (pointMap[i] > pointMap[j]) { result[i]++ }
        if (pointMap[i] < pointMap[j]) { result[j]++ }
      }
    }
  }
  console.log("result", result)

  return Math.max(...result)
}


const friends = ["joy", "brad", "alessandro", "conan", "david"]
const gifts = ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]

const answer = solution(friends, gifts)
console.log("this is answer", answer)

// function solution(friends, gifts) {
//   const len = friends.length;
//   const nameMap = new Map();
//   const giftTable = new Array(len).fill(0).map(_ => new Array(len).fill(0));
//   const rankInfo = new Array(len).fill(0);
//   const nextMonth = new Array(len).fill(0);

//   // 친구들 키 값 저장.
//   friends.forEach((name, idx) => {
//     nameMap.set(name, idx);
//   })


//   // 선물 주고받은 내역 기록
//   gifts.forEach(info => {
//     const [from, to] = info.split(" ");
//     giftTable[nameMap.get(from)][nameMap.get(to)]++;
//   })

//   console.log(nameMap)
//   console.log("giftTable", giftTable)
//   // 기록을 바탕으로 선물 지수 계산
//   for (let i = 0; i < len; i++) {
//     rankInfo[i] = giftTable[i].reduce((acc, cur) => acc += cur, 0)

//     for (let j = 0; j < len; j++) {
//       rankInfo[i] -= giftTable[j][i];
//     }
//   }

//   console.log(rankInfo)
//   // 다음 달 받을 선물 계산
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (i === j) continue;
//       if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
//       if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
//       if (giftTable[i][j] === giftTable[j][i]) {
//         if (rankInfo[i] > rankInfo[j]) nextMonth[i]++
//         if (rankInfo[i] < rankInfo[j]) nextMonth[j]++
//       }
//     }
//   }
//   console.log(nextMonth)

//   // 최댓값 반환
//   return Math.max(...nextMonth)
// }