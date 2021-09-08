let parksu = ["수", "박"];
function solution(n) {
  var answer = new Array(n)
    .fill("a")
    .map((element, index) => (index % 2 === 0 ? "수" : "박"))
    .join("");
  return answer;
}

solution(3);
