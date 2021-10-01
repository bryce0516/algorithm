// let cache = {};
// const solution = (res) => {
//   if (res <= 1) {
//     console.log("works1", res);
//     return res;
//   }
//   if (cache[res]) {
//     console.log("this is cache", res, cache);
//     return cache[res];
//   }
//   console.log("works2", res);
//   return (cache[res] = solution(res - 1) + solution(res - 2));
// };

// const value = solution(10);
// console.log(value);

const dib = (res) => {
  console.log(res);
  if (res <= 1) return;

  dib(res - 1);
  dib(res - 1);
};

dib(4);
