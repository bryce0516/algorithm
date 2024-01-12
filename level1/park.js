function solution(park, routes) {
  console.log(park)

  var answer = [];

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      console.log("park", park[i][j])
    }
  }

  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (routes[i][j] !== " ") {
        console.log("routes", routes[i][j])
      }
    }
  }

  return answer;
}


const park = ["OSO", "OOO", "OXO", "OOO"]

const routes = ["E 2", "S 3", "W 1"]

const result = solution(park, routes);