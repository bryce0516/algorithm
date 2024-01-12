function solution(players, callings) {
  let _index = 0
  let endIndex = callings.length
  const recursion = (caller, origin) => {
    if (_index === endIndex) {
      return origin
    }
    let end = true
    let $index = 0
    while (end) {
      if ($index === origin.length - 1) {
        end = false
      }
      if (caller === origin[$index]) {

        if ($index >= 1) {
          let target = origin[$index]
          let after = origin[$index - 1]
          origin.splice($index, 1, after)
          origin.splice($index - 1, 1, target)
          end = false
        }
      }
      $index++
    }
    _index++
    return recursion(callings[_index], origin)
  }
  const dd = recursion(callings[_index], players)
}

const players = ["mumu", "soe", "poe", "kai", "mine"]
const callings = ["kai", "kai", "mine", "mine"]
solution(players, callings)