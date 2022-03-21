function factorial(n) {
  console.log("this is n", n);
  if (n <= 1) return 1;
  if (n > 1) return n + factorial(n - 1);
  //  * factorial(n - 2);
}

const result = factorial(3);
console.log("this isresult", result);
