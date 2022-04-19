// const selection = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let target = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (target < arr[j]) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };
const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    console.log(">>>>>>", arr);
    if (i !== lowest) {
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};

const value = selection([37, 45, 29, 8, 12, 88, 100]);
console.log(value);
