function maxChar(str) {
  let charMap = new Map()
  let max = 0
  let maxI = 0
  str.split("").forEach(val => {
    charMap.get(val) ? charMap.set(val, charMap.get(val) + 1) : charMap.set(val, 1)
  })
  charMap.forEach((val, i, map) => {
    if (val > max) {
      max = val
      maxI = i
    }
  })

  return maxI
}

module.exports = maxChar
