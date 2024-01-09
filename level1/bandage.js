function solution(bandage, health, attacks) {
  var answer = 0;
  let effect = 0
  const maxHealth = health
  const lastAttacks = attacks[attacks.length - 1][0]

  for (let i = 0; i < lastAttacks + 1; i++) {
    let isAttacked = false
    for (let j = 0; j < attacks.length; j++) {
      if (i === attacks[j][0]) {
        isAttacked = true
        health -= attacks[j][1]
        effect = 0
      }
    }

    if (i !== 0 && !isAttacked) {
      if (maxHealth !== health) {
        if (health + bandage[1] >= maxHealth) {
          health = maxHealth
        } else {
          health += bandage[1]
        }
      }

      effect += 1

      if (effect === bandage[0]) {
        health += bandage[2]
        effect = 0
      }
    }

    if (health <= 0) {
      break;
    }
  }



  return health <= 0 ? -1 : health
}


const bandage = [5, 1, 5]
const bandage1 = [3, 2, 7]
const bandage2 = [4, 2, 7]
const bandage3 = [1, 1, 1]
const bandage4 = [10, 10, 100]
const bandage5 = [3, 10, 1]

const health = 30
const health1 = 20
const health2 = 20
const health3 = 5
const health4 = 10
const health5 = 100

const attacks = [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5]
]
const attacks1 = [[1, 15], [5, 16], [8, 6]]
const attacks2 = [[1, 15], [5, 16], [8, 6]]
const attacks3 = [[1, 2], [3, 2]]
const attacks4 = [[1, 15], [3, 1]]
const attacks5 = [[1, 5], [3, 5]]
const result = solution(
  bandage5,
  health5,
  attacks5,
)

console.log("result", result)