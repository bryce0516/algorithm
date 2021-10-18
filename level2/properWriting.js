function solution(s) {
  const arr = s.split("");
  // const recursion = (arr, start, YN) => {
  //   console.log("this is recursion", start, arr);
  //   if (start === s.length) {
  //     return;
  //   }
  //   if (arr.length === 0) {
  //     return true;
  //   }

  //   let index = 0;
  //   while (true) {
  //     if (arr[index] === "(" && arr[index + 1] === ")") {
  //       if (index === 0) {
  //         arr.splice(0, 2);
  //       } else {
  //         arr.splice(index, index + 1);
  //       }
  //       console.log("in while", start, index, "result ======>", arr);
  //     } else {
  //       YN = false;
  //     }
  //     console.log(index);
  //     index++;
  //     if (index === arr.length) {
  //       break;
  //     }
  //   }

  //   return recursion(arr, start + 1, YN);
  // };

  // const answer = recursion(arr, 0);
  // console.log(answer);

  const recursion = (array, start) => {
    if (start === s.length) {
      return console.log("end recursion");
    }
    console.log("index num", start);
    let index = 0;
    while (true) {
      index++;
      console.log("in while =====>  ", index);
      if (array[index] === "(" && array[index + 1] === ")") {
        if (index === 0) {
          array.splice(0, 2);
        } else {
          array.splice(index, index + 1);
        }
      }

      if (index === array.length) {
        break;
      }
    }
    return recursion(array, start + 1);
  };
  recursion(arr, 0);
}

solution("(())()");
