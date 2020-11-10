// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// #4
function anagrams(stringA, stringB) {
  const cleanStr = str => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  }
  return cleanStr(stringA) == cleanStr(stringB)
}

module.exports = anagrams

// #1
// function anagrams(stringA, stringB) {
//   return stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("") === stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
// }

// #2
// function anagrams(stringA, stringB) {
//   let mapX = X => {
//     let mapX = new Map()
//     let res = X.replace(/[^\w]/g, "").toLowerCase().split("").sort()
//     res.map(char => (mapX.has(char) ? mapX.set(char, mapX.get(char) + 1) : mapX.set(char, 1)))
//     return [mapX, res.length]
//   }
//   if (mapX(stringA)[1] !== mapX(stringB)[1]) {
//     return false
//   } else {
//     const mapA = mapX(stringA)[0]
//     const mapB = mapX(stringB)[0]
//     for (let char of mapA) {
//       if (mapB.has(char[0]) && mapA.has(char[0]) && mapA.get(char[0]) == mapB.get(char[0])) {
//         return true
//       } else {
//         return false
//       }
//     }
//   }
// }
// #3
// function anagrams(stringA, stringB) {
//   const mapA = charMap(stringA)
//   const mapB = charMap(stringB)

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false
//   }
//   for (let char in mapA) {
//     return mapA[char] == mapB[char]
//   }
// }

// function charMap(str) {
//   const newMap = {}
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     newMap[char] = newMap[char] + 1 || 1
//   }
//   return newMap
// }
