function solution(board, h, w) {
  let target = board[h][w]
  let up = board[h - 1][w]
  let left = board[h][w - 1]
  let down = board[h + 1][w]
  let right = board[h][w + 1]

  return [left, up, right, down].filter((el) => el === target).length
}

const board1 = [["blue", "red", "orange", "red"], ["red", "red", "blue", "orange"], ["blue", "orange", "red", "red"], ["orange", "orange", "red", "blue"]]
const board2 = [["yellow", "green", "blue"], ["blue", "green", "yellow"], ["yellow", "blue", "blue"]]
const h1 = 1
const h2 = 0
const w1 = 1
const w2 = 1

solution(board1, h1, w1)

// python
// def solution(board, h, w):
// target = board[h][w]
// up = board[h - 1][w] if h - 1 >= 0 else None
// left = board[h][w - 1] if w - 1 >= 0 else None
// down = board[h + 1][w] if h + 1 < len(board) else None
// right = board[h][w + 1] if w + 1 < len(board[0]) else None
// neighbors = [left, up, right, down]
// count = len(list(filter(lambda x: x == target, neighbors)))
// return count
