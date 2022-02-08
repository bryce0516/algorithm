// const findLongestSubstring = function(str) {
//   console.log(str, str.length, str[0])
  
//   let maxLen = -Infinity
//   let index= 0
//   let checkIndex = 1
//   let checka = []
//   while (index < str.length) {

//     if(str[checkIndex] !== str[index] && str[checkIndex] ) {
//       console.log('first',str[checkIndex],str[index], index, checkIndex)
//       checkIndex++
//     } else if(str[checkIndex] === str[index]){
//       console.log('second',str[checkIndex],str[index])
//       console.log('checkIndex - index',checkIndex - index)
//       checka.push([str[index], str[checkIndex],checkIndex - index])
//       maxLen = Math.max(maxLen, checkIndex - index)
//       index++
//       checkIndex = index +1 
//     } else if(checkIndex === str.length){
//       index++
//       checkIndex = index +1 
//     } 
//   }
//   console.log('this is min len',maxLen,checka)

// }

const findLongestSubstring = function(str) {
 let longest = 0;
 let seen = {}
 let start =0
 for(let i =0; i< str.length; i ++) {
    let char = str[i]
    
    if(seen[char]){
        console.log("working",start, i)
        start = Math.max(start, seen[char])
    }

    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
 }
 console.log(longest,seen)

return longest
}

const result = findLongestSubstring('rithmschool')