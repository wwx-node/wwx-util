require('../string/fillChar')
var CONST = require('../const')
/**
 * @description 数字填充0
 * @example
 * Number(123).fillZero(4) === '0123'
 * @param {number} length 最小长度
 * @param {String} position = [0, 1] 填充位置,可选值域包括left[0]和right[1]
 * @return {String}
 */
function fillZero (length, position) {
  var str = this + '';
  position = position || CONST.LEFT
  return str.fillChar(length, '0', position)
}
if (!Number.prototype.fillZero) {
  Number.prototype.fillZero = fillZero
}
require('./genCode')
require('./toFixed2')
