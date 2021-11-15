function solution(msg) {
  const arr = Array.from({ length: 26 }, (_, i) => {
    const obj = new Object();
    obj[String.fromCharCode(65 + i)] = i + 1;
    return obj;
  });
  let mock = [];
  let mock2 = [];
  const set = new Set([...arr]);

  let initialIndex = 0;
  let initialIndex2 = 1;
  let check = "1";
  let initialString = msg.substring(0, 1);
  const recursive = (string, inputed1, inputed2, yn, nm) => {
    console.log(string, inputed1, inputed2);
    let decision = false;
    for (let [item] of set.entries()) {
      if (Object.keys(item)[0] === string) {
        const value = Object.values(item)[0];
        if (mock.includes(value) === false) {
          mock.push(value);
        } else {
          decision = true;
        }
      }
    }

    if (nm !== mock.length) {
      nm = mock.length;
      yn = "1";
    } else if (decision) {
      yn = "3";
    } else if (nm === mock.length) {
      yn = "2";
    }

    console.log("this is check yn", yn, decision);

    if (yn === "1" || yn === "3") {
      inputed2++;
      let target = msg.substring(inputed1, inputed2);
      if (inputed2 === 5) {
        return console.log("this is end");
      }
      return recursive(target, inputed1, inputed2, yn, nm);
    } else if (yn === "2") {
      if (inputed2 - inputed1 > 2) {
        inputed1 = inputed1 + (inputed2 - inputed1);
      } else {
        inputed1++;
      }

      const obj = new Object();
      obj[string] = set.size + 1;
      set.add(obj);

      let target = msg.substring(inputed1, inputed2);
      if (inputed2 === 5) {
        return console.log("this is end");
      }
      return recursive(target, inputed1, inputed2, yn, nm);
    }
  };
  recursive(initialString, initialIndex, initialIndex2, check, 0);

  console.log("this is mock", mock, set);
}

solution("KAKAO");
