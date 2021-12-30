function solution(schedule) {
  let obj = {
    "MO":[],
    "TU":[],
    "WE":[],
    "TH":[],
    "FR":[]
  }
  let obj2 = {
    "MO":[],
    "TU":[],
    "WE":[],
    "TH":[],
    "FR":[]
  }

  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
      const splited = schedule[i][j].split(/\s/)
      if(splited.length >  2){
        if(splited[0] === "MO"){
          obj2["MO"].push(splited[1])

        }
        if(splited[0] === "TU"){
          obj2["TU"].push(splited[1])

        }
        if(splited[0] === "WE"){
          obj2["WE"].push(splited[1])

        }
        if(splited[0] === "TH"){
          obj2["TH"].push(splited[1])

        }
        if(splited[0] === "FR"){
          obj2["FR"].push(splited[1])
        }
        if(splited[2] === "MO" ){
          obj2["MO"].push(splited[3])

        }
        if(splited[2] === "TU"){
          obj2["TU"].push(splited[3])

        }
        if(splited[2] === "WE"){
          obj2["WE"].push(splited[3])

        }
        if(splited[2] === "TH"){
          obj2["TH"].push(splited[3])

        }
        if(splited[2] === "FR"){
          obj2["FR"].push(splited[3])
        }
        //2개이상수
      } else {
        if(splited[0] === "MO"){
          obj["MO"].push(splited[1])

        }
        if(splited[0] === "TU"){
          obj["TU"].push(splited[1])

        }
        if(splited[0] === "WE"){
          obj["WE"].push(splited[1])

        }
        if(splited[0] === "TH"){
          obj["TH"].push(splited[1])

        }
        if(splited[0] === "FR"){
          obj["FR"].push(splited[1])
        }
        // if(splited[0] === Object.keys(obj))
      }

      console.log(splited,splited.length)
    }
  }
  const inputed = "12:00".split(":")
  const time = inputed[0] * 3600
  const miniute = inputed[1] * 60
  
  const sec = time + miniute
  console.log(
    obj
  )
  console.log(
    obj2
  )
  var answer = -1;
  return answer;
}

solution([["MO 12:00 WE 14:30", "MO 12:00", "MO 15:00", "MO 18:00"], ["TU 09:00", "TU 10:00", "TU 15:00", "TU 18:00"], ["WE 09:00", "WE 12:00", "WE 15:00", "WE 18:00"], ["TH 09:30", "TH 11:30", "TH 15:00", "TH 18:00"], ["FR 15:00", "FR 15:00", "FR 15:00", "FR 15:00"]])