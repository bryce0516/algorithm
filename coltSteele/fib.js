const fib = (n) => {
  cache = {};
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (cache[n]) {
    return cache[n];
  } else {
    return (cache[n] = fib(n - 1) + fib(n - 2));
  }
};

const result = fib(10);
console.log("this is res", result);
