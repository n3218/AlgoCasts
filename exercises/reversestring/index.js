// #2
function reverse(str) {
  let reversed = ""
  for (let char of str) {
    reversed = char + reversed
    debugger
  }
  return reversed
}

reverse("abcde")

module.exports = reverse

// #1
// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// #3
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "")
// }
