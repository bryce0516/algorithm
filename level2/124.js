// function solution(n) {
//   let standard = [4, 1, 2];
//   let answer = [];
//   let decision = 0;
//   let pointer = 0;

//   // for (let i = 0; i < n; i++) {
//   //   const re = n % 3;
//   //   const divid = Math.floor(i / 3);
//   //   console.log("re", i, divid);
//   //   if (divid >= 1) {
//   //     const result = standard[divid % 3] + standard[re].toString();
//   //     console.log("this is result >>", result, standard[divid], standard[re]);
//   //     if (divid % 3 === 0) {
//   //       console.log("working", divid % 3);
//   //     }
//   //   }
//   // }

//   console.log(answer);
// }

function solution(n) {
  let standard = [1, 2, 4];
  let answer = [];
  let decision = 1;
  let pointer = 0;
  let firstValue = 1;
  let afterValue = 0;
  let realValue = 0;
  while (pointer < n) {
    console.log(pointer, decision, Math.floor(pointer / 3));
    firstValue = standard[decision - 1];
    afterValue = Math.floor(pointer / 3);
    if (decision % 3 === 0) {
      decision = 0;
    }
    if (afterValue !== 0 && firstValue === 4) {
      realValue = afterValue + firstValue.toString();
    }

    console.log("thisi s val", realValue);
    realValue;
    decision++;
    pointer++;
  }
  // for (let i = 0; i < n; i++) {
  //   const re = n % 3;
  //   const divid = Math.floor(i / 3);
  //   console.log("re", i, divid);
  //   if (divid >= 1) {
  //     const result = standard[divid % 3] + standard[re].toString();
  //     console.log("this is result >>", result, standard[divid], standard[re]);
  //     if (divid % 3 === 0) {
  //       console.log("working", divid % 3);
  //     }
  //   }
  // }

  console.log(answer);
}

const result = solution(11);
