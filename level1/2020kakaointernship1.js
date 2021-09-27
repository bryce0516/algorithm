function solution(numbers, hand) {
  const grid = [
    [0, -2],
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, -2],
    [1, -2],
  ];

  let L = 10; // 10th element of the grid are * and # of the keypad
  let R = 11; // 11th
  let L_steps, R_steps;

  hand = hand[0].toUpperCase();
  numbers.forEach((element) => {
    console.log(element, grid[element][0]);
  });
}

solution([4, 3, 2, 8, 8, 2, 1, 4, 5, 9, 5], "right");
