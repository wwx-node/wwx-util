CONST = require('../const')

###*
# 填充字符串
# @example 'lab'.fillChar(5, '_', CONST.LEFT) // __lab
# @example 'lab'.fillChar(4, '_', CONST.RIGHT) // lab_
# @example 'lab'.fillChar(6, '_') // lab___
# @param length {number} 最小长度
# @param char {string} 填充字符
# @param position {number} 位置 0 左 1 右
# @returns {string}
###

fillChar = (length, char, position) ->
  len = length - (@length) + 1
  fillStr = new Array(if len > 0 then len else 0).join(char or '0')
  if position == CONST.LEFT then fillStr + this else this + fillStr

if !String::fillChar
  String::fillChar = fillChar
if require.main == module
  console.log 'lab'.fillChar(5, '_', CONST.LEFT)
  console.log 'lab'.fillChar(4, '_', CONST.RIGHT)
  console.log 'lab'.fillChar(6, '_')
