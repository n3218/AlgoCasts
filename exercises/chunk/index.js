// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let resArr = []
  let count = 0
  let sArr = []
  for (let i = 0; i < array.length; i++) {
    if (count <= size) {
      sArr.push(array[i])
      count++
    }
    if (count && count % size === 0 && sArr !== []) {
      resArr.push(sArr)
      count = 0
      sArr = []
    }
  }
  if (sArr !== []) {
    resArr.push(sArr)
  }
  console.log("resArr: ", resArr)
  return resArr
}

module.exports = chunk
