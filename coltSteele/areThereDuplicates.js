function areThereDuplicates(inputed) {
  // good luck. (supply any arguments you deem necessary.)
  const set = new Set([...inputed]);
  const size = set.size;
  const length = inputed.length;
  return size === length;
}

const result = areThereDuplicates(["a", "b", "c", "a"]);

console.log(result);
