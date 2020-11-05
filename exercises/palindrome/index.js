function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

module.exports = palindrome

// #1
// function palindrome(str) {
//   let rev = str.split("").reverse().join("")
//   return str === rev
// }
