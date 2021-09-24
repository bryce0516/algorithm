function solution(new_id) {
  const first = new_id.toLowerCase();
  // console.log(new_id.toLowerCase());
  const secondReg = /[^a-z|0-9|\-|\_|\.]+/gm;
  const second = first.replace(secondReg, "");
  const thirdReg = /\.\.+/gm;
  const fourthReg = /^[\.]|[\.]$/gm;
  const seventhReg = /.$/gm;
  const sixReg = /[\.]$/gm;
  const third = second.replace(thirdReg, ".");
  let fourth = third.replace(fourthReg, "");
  if (fourth.length === 0) {
    fourth = "a";
  }
  let fifth = fourth.substring(0, 15);
  fifth = fifth.replace(sixReg, "");
  // console.log(second);
  // console.log(third);
  // console.log(fourth);
  // console.log(fifth, fifth.length, 3 - fifth.length);
  if (fifth.length < 3) {
    const value = fifth.match(seventhReg);
    for (let i = 0; i <= 3 - fifth.length; i++) {
      fifth += value[0];
    }
  }
  var answer = fifth;

  return answer;
}

solution("abcdefghijklmn.p");

// function solution(new_id) {
//   const answer = new_id
//     .toLowerCase() // 1
//     .replace(/[^\w-_.]/g, "") // 2
//     .replace(/\.+/g, ".") // 3
//     .replace(/^\.|\.$/g, "") // 4
//     .replace(/^$/, "a") // 5
//     .slice(0, 15)
//     .replace(/\.$/, ""); // 6
//   const len = answer.length;
//   return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
