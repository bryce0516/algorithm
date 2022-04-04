const maximumBobPoints = (numArrows, aliceArrows) => {
  let best = 0;
  let bestArray;

  const check = (index, sum, arrowsLeft, arr) => {
    if (index === 12 || arrowsLeft === 0) {
      if (sum > best) {
        best = sum;
        if (arrowsLeft > 0) arr[0] += arrowsLeft;
        bestArray = arr;
      }
      return;
    }
    console.log("bestArray", bestArray);
    if (aliceArrows[index] < arrowsLeft) {
      const newArr = arr.slice();
      // console.log("sliced", newArr);
      newArr[index] = aliceArrows[index] + 1;

      check(
        index + 1,
        sum + index,
        arrowsLeft - aliceArrows[index] - 1,
        newArr
      );
    }

    check(index + 1, sum, arrowsLeft, arr);
  };
  check(0, 0, numArrows, new Array(12).fill(0));

  return bestArray;
};

const result = maximumBobPoints(
  (numArrows = 9),
  (aliceArrows = [1, 1, 0, 1, 0, 0, 2, 1, 0, 1, 2, 0])
);

console.log(result);
// var maximumBobPoints = function(numArrows, aliceArrows) {
//   let bobArrows = new Array(12).fill(0);
//   let total= numArrows;
//   let p=0;
//   let countMax = (index,total,bob,aliceArrows,p) =>{
//   let newarr = [...bob];
//   if(total == 0 || index == 0){ // base condition
//   if(total>0 && index == 0){
//   newarr[0] = total;
//   }
//   return [p,newarr];
//   }
//   let a = aliceArrows[index];

//    // with out take
//    let wo = countMax(index-1,total,newarr,aliceArrows,p);
//    if(total>= a+1){
//     newarr[index]=a+1;

//     //with take check conditions
//     w = countMax(index-1,total-a-1,newarr,aliceArrows,p+index);
//     return wo[0]>w[0]?wo:w;
//   } else {
//     return wo;
//   }
//   }
//   const arr = countMax(11,total,bobArrows,aliceArrows,0);
//   return arr[1];
//   };
