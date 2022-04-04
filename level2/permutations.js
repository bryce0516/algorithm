//순열
const permutations = (arr, selectedNumber) => {
  const result = [];

  if (selectedNumber === 1) {
    const result2 = arr.map((el) => [el]);
    console.log(result2);
    return result2;
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = permutations(rest, selectedNumber - 1);
    const attached = permutation.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  console.log("result", result);
  return result;
};

// permutations([1, 2, 3, 4], 2);

//조합
const combination = (arr, selectedNumber) => {
  const result = [];
  if (selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = combination(rest, selectedNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  console.log("result", result);
  return result;
};

combination([1, 2, 3, 4], 2);
