/**
 * 末位舍去
 * @param {number} count
 * @returns {number}
 */
function toFixed2 (count) {
  var n = Math.pow(10, count)
  return Math.floor(this * n) / n
}

if (!Number.prototype.toFixed2) {
  Number.prototype.toFixed2 = toFixed2
}