// function areThereDuplicates(inputed) {
//   // good luck. (supply any arguments you deem necessary.)
//   const set = new Set([...inputed]);
//   const size = set.size;
//   const length = inputed.length;
//   return size === length;
// }

//(Frequency Counter)
// function areThereDuplicates() {
//   let collection = {};
//   console.log("arg", arguments);
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   console.log(collection);
//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// }

//doesn't work
function areThereDuplicates() {
  const args = [...arguments];
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    console.log(args[start], args[next], start, next);
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

const result = areThereDuplicates(1, 2, 2);

console.log(result);
