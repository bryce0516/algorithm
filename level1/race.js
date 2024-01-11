function solution(players, callings) {

  let hash = {}

  for (const element in players) {
    hash[players[element]] = Number(element)
  }
  return callings.reduce((acc, cur, index) => {
    console.log(acc)
    console.log("cur", cur)

    const index1 = acc[cur] - 1 // to
    const index2 = acc[cur] // from


    console.log("index1", index1)
    console.log("index2", index2)
    const entries = Object.entries(acc);

    const key = entries.find(([key, value]) => value === 2);
    console.log("dd", key[0]);

    if (acc[cur] >= 1) {

    }
    // acc.map((element, index2) => {
    //   if (element == cur) {
    //     acc[index2] = acc[index2 - 1]
    //     acc[index2 - 1] = cur
    //   }
    //   return element
    // })
    return acc
  }, hash)
}

// function solution2(players, callings) {
//   let cache = 

//   console.log(players)
//   console.log(callings)

// }

const players = ["mumu", "soe", "poe", "kai", "mine"]
const callings = ["kai", "kai", "mine", "mine"]
solution(players, callings)