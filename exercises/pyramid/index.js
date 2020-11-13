// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// #3
function pyramid(n, row = 0, level = "") {
  if (row == n) {
    return
  }

  if (level.length == 2 * n - 1) {
    console.log(level)
    return pyramid(n, row + 1)
  }
  const midPoint = Math.floor((2 * n - 1) / 2)
  let add
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = "#"
  } else {
    add = " "
  }
  pyramid(n, row, level + add)
}

module.exports = pyramid

// #1
// function pyramid(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = ""
//     for (let col = 1; col <= n + n - 1; col++) {
//       if (col + row - 1 < n || col - row + 1 > n) {
//         str = str + " "
//       } else {
//         str = str + "#"
//       }
//     }
//     console.log(str)
//   }
// }

// #2
// function pyramid(n) {
//   const mid = Math.floor((2*n-1)/2)
//   for(let row=0; row<n; row++) {
//     let str = ''
//     for(let col=0; col<2*n-1; col++) {
//       if(mid - row<=col && mid + row >= col) { str += '#' }
//       else{ str+=' '}
//     }
//     console.log(str)
//   }
// }
