function solution(record) {
  console.log(record);

  const message = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  let answer = [];
  for (let i = 0; i < record.length; i++) {
    let value = record[i].split(" ");
    if (value[0] === "Enter") {
      answer.push(`${value[1]}${message["Enter"]}`);
    }
    if (value[0] === "Leave") {
      answer.push(`${value[1]}${message["Leave"]}`);
    }
    if (value[0] === "Change") {
    }
  }
  console.log(answer);
  return answer;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);

[
  "Prodo님이 들어왔습니다.",
  "Ryan님이 들어왔습니다.",
  "Prodo님이 나갔습니다.",
  "Prodo님이 들어왔습니다.",
];
