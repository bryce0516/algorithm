// function solution(arr) {
//   let mock = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       mock.push(arr[i]);
//     }
//   }

//   console.log(mock);
//   var answer = mock;

//   // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//   console.log("Hello Javascript");

//   return answer;
// }

// function solution(arr) {
//   return arr.filter((val, index) => val != arr[index + 1]);
// }

function solution(arr) {
  return arr.reduce(function (a, b) {
    if (a.length == 0 || (a.length > 0 && a[a.length - 1] !== b)) {
      a.push(b);
    }
    return a;
  }, []);
}

const value = solution([1, 1, 3, 3, 0, 1, 1]);
console.log(value);
