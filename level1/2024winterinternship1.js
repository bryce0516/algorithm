function solution(friends, gifts) {
  let chart = []
  let givers = Array.from({ length: friends.length }, (_, i) => {
    let copy = [...friends]
    copy.splice(i, 1)
    const obj = {}
    copy.map((element, index) => {
      obj[element] = 0
    })
    chart.push(friends[i], { give: 0, receive: 0, point: 0 })
    _ = [friends[i], obj]
    return _
  }).map(([giver, target], index) => {
    gifts.map((element, index) => {
      const [from, to] = element.split(" ")
      if (from === giver) {
        target[to] += 1
        console.log(giver, to)
      }
    })
    return [giver, target]
  }).map(([giver, target], index) => {
    Object.values(target).map((element, index) => {

    })
  })
  console.log(givers)




  var answer = 0;
  return answer;
}

const friends = ["muzi", "ryan", "frodo", "neo"]
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi"
]

solution(friends, gifts)