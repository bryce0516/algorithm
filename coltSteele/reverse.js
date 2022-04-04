function reverse(str) {
  const arr = str.split("");
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join("");
}

const result = reverse("rithmschool"); // 'emosewa'
console.log(result);
// reverse('rithmschool') // 'loohcsmhtir'
