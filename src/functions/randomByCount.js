var nativeRandom = Math.random

/**
 * @description 根据数量计算概率<br />
 * @param defs {Array} [['事件一', 4], ['事件二', 10], ['事件三', 89]]
 * @returns {string} result 随机结果
 * @since 2016-02-25
 * @author wuweixing
 * @version 0.0.1
 * @example
 * randomByCount([['事件一', 4], ['事件二', 10], ['事件三', 89]]) // 事件三
 */
function randomByCount (defs) {
  var sum = 0,
    len = defs.length
  for (var i = 0; i < len; i++) {
    var def = defs[i]
    var defVal = def[1]
    def[1] = defVal + sum
    sum += defVal
  }
  var randomNum = nativeRandom()
  var result
  for (var i = 0; i < len; i++) {
    var def = defs[i]
    if (randomNum < def[1] / sum) {
      result = def[0]
      break
    }
  }
  return result
}
module.exports = randomByCount

if (require.main === module) {
  var count = {}
  for (var i = 0; i < 1000; i++) {
    var result = randomByCount([['事件一', 4], ['事件二', 10], ['事件三', 89]])
    count[result] = (count[result] || 0) + 1
  }
  console.log(count)
}
