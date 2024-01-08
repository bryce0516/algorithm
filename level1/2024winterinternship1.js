function solution(friends, gifts) {
  let givers = Array.from({ length: friends.length }, (_, i) => {
    let copy = [...friends]
    copy.splice(i, 1)
    const obj = {}
    copy.map((element, index) => {
      obj[element] = 0
    })
    _ = [friends[i], obj, 0, 0, 0]
    // 이름 / 전적 / 준개수 / 받은개수 / 점수
    return _
  }).map(([giver, target, ...rest], index) => {
    gifts.map((element, index2) => {
      // from 준사람 to 받은사람
      const [from, to] = element.split(" ")
      // 받은경우
      if (from === giver) {
        target[to] += 1
        rest[0] += 1

      } else if (to === giver) {
        rest[1] += 1
      }
      // console.log(giver, to, rest)
    })



    // rest[2] = rest[0] - rest[1]
    // console.log("final", [giver, target, ...rest])
    return [giver, target, rest[0], rest[1], rest[2] = rest[0] - rest[1], rest[3]]
  })
  // .map(([giver, target], index) => {
  //   Object.values(target).map((element, index) => {

  //   })
  // })
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