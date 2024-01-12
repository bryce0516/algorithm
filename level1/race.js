function solution(players, callings) {
  const hashPlayer = {}
  const hashRank = {}
  for (const element in players) {
    hashPlayer[players[element]] = Number(element)
    hashRank[element] = players[element]
  }

  let _index = 0
  let endIndex = callings.length
  while (_index < endIndex) {
    const target = callings[_index]
    const targetIndex = Number(hashPlayer[target])
    const after = hashRank[targetIndex - 1]
    const afterIndex = targetIndex - 1

    hashPlayer[target] = afterIndex
    hashPlayer[after] = targetIndex
    hashRank[targetIndex] = after
    hashRank[afterIndex] = target
    _index++
  }

  return Object.values(hashRank)
}

const players = ["mumu", "soe", "poe", "kai", "mine"]
const callings = ["kai", "kai", "mine", "mine"]

const result = solution(players, callings)
console.log("players. ", players);
console.log("result ", result);

// function refactorSolution(players, callings) {
//   class PlayerNode {
//     constructor(name) {
//       this.name = name;
//       this.prev = null;
//       this.next = null;
//     }
//   }

//   let head = new PlayerNode(null);
//   let tail = head;
//   let playerToNode = {};

//   players.forEach(player => {
//     let newNode = new PlayerNode(player);

//     tail.next = newNode;

//     newNode.prev = tail;

//     playerToNode[player] = newNode;

//     tail = newNode;
//   });

//   callings.forEach((player, index) => {
//     let node = playerToNode[player];
//     if (node.prev && node.prev.name !== null) {
//       let prevNode = node.prev;
//       let nextNode = node.next;

//       prevNode.next = nextNode;
//       node.prev = prevNode.prev;
//       node.next = prevNode;
//       prevNode.prev = node;
//       if (nextNode) {
//         nextNode.prev = prevNode;
//       }
//       if (node.prev) {
//         node.prev.next = node;
//       }
//     }
//   });

//   let result = [];
//   let current = head.next;
//   while (current) {
//     result.push(current.name);
//     current = current.next;
//   }

//   return result;
// }

// 테스트
// let players = ["mumu", "soe", "poe", "kai", "mine"];
// let callings = ["kai", "kai", "mine", "mine"];
// const result = refactorSolution(players, callings)
// console.log("players. ", players);
// console.log("result ", result);


// case1
// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.10ms, 33.6MB)
// 테스트 3 〉	통과 (0.22ms, 33.5MB)
// 테스트 4 〉	통과 (0.35ms, 33.5MB)
// 테스트 5 〉	통과 (0.96ms, 34MB)
// 테스트 6 〉	통과 (3.59ms, 37.5MB)
// 테스트 7 〉	통과 (6.98ms, 41.4MB)
// 테스트 8 〉	통과 (13.04ms, 45.8MB)
// 테스트 9 〉	통과 (28.53ms, 51.3MB)
// 테스트 10 〉	통과 (72.02ms, 71.9MB)
// 테스트 11 〉	통과 (118.32ms, 84MB)
// 테스트 12 〉	통과 (147.66ms, 84MB)
// 테스트 13 〉	통과 (124.18ms, 84.1MB)
// 테스트 14 〉	통과 (0.08ms, 33.5MB)
// 테스트 15 〉	통과 (0.08ms, 33.5MB)
// 테스트 16 〉	통과 (0.08ms, 33.6MB)

// case2
// 테스트 1 〉	통과 (0.14ms, 33.4MB)
// 테스트 2 〉	통과 (0.24ms, 33.5MB)
// 테스트 3 〉	통과 (0.30ms, 33.5MB)
// 테스트 4 〉	통과 (0.48ms, 33.5MB)
// 테스트 5 〉	통과 (1.67ms, 36MB)
// 테스트 6 〉	통과 (17.91ms, 37.4MB)
// 테스트 7 〉	통과 (5.95ms, 40.6MB)
// 테스트 8 〉	통과 (10.97ms, 46.7MB)
// 테스트 9 〉	통과 (24.92ms, 53.7MB)
// 테스트 10 〉	통과 (97.07ms, 77.7MB)
// 테스트 11 〉	통과 (158.17ms, 90.3MB)
// 테스트 12 〉	통과 (137.08ms, 90.3MB)
// 테스트 13 〉	통과 (143.90ms, 90.4MB)
// 테스트 14 〉	통과 (0.21ms, 33.4MB)
// 테스트 15 〉	통과 (0.16ms, 33.4MB)
// 테스트 16 〉	통과 (0.25ms, 33.4MB)