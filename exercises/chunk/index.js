// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// #3
function chunk(array, size) {
  const resArr = []
  let index = 0
  while (index < array.length) {
    resArr.push(array.slice(index, index + size))
    index = index + size
  }
  return resArr
}

module.exports = chunk

// #2
// function chunk(array, size) {
//   const resArr = []

//   for (let num of array) {
//     const subArr = resArr[resArr.length - 1]
//     if (!subArr || subArr.length == size) {
//       resArr.push([num])
//     } else {
//       subArr.push(num)
//     }
//   }
//   return resArr
// }
