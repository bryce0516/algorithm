const power = (base, excomponent) => {
  console.log(base, excomponent);
  if (excomponent === 0) {
    return 1;
  } else {
    return base * power(base, excomponent - 1);
  }
};

const result = power(2, 4);
console.log(result);
