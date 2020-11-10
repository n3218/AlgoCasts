// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// #3
function capitalize(str) {
  const words = []
  str.split(" ").map(el => words.push(el[0].toUpperCase() + el.slice(1)))
  return words.join(" ")
}

module.exports = capitalize

// #1
// function capitalize(str) {
//   return str
//     .split(" ")
//     .map(el => el.replace(el.charAt(0), el.charAt(0).toUpperCase()))
//     .join(" ")
// }

// #2
// function capitalize(str) {
//   let res = str[0].toUpperCase()
//   for (let i = 1; i < str.length; i++) {
//     str[i - 1] === " " ? (res += str[i].toUpperCase()) : (res += str[i])
//   }
//   return res
// }
