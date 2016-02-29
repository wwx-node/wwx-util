function log10 (x) {
  return Math.log(x) / Math.log(10)
}
/**
 * 根据十进制数字生成不重复的一一对应编码
 * @param baseStr {string}
 * @example Number(15068729212).genCode() // 'n6vbCV'
 * @example Number(15068729212).genCode('abc123') // 'ba31bb1ba33bc2'
 * @returns {string}
 */
function genCode (baseStr) {
  baseStr = baseStr || 'ABCDEFG1234hijklmnuvwxyzHIJKLMNOPQRSTabcdefgUVWXYZ56789opqrst';
  var baseStrLength = baseStr.length;
  var str = this;
  var out = '';
  for (var t = Math.floor(log10(str) / log10(baseStrLength)); t >= 0; t--) {
    var a = Math.floor(str / Math.pow(baseStrLength, t));
    out += baseStr.charAt(a);
    str = str - (a * Math.pow(baseStrLength, t))
  }
  return out
}

if (!Number.prototype.genCode) {
  Number.prototype.genCode = genCode
}

if (require.main === module) {
  console.log(Number(15068729212).genCode());
  console.log(Number(15068729212).genCode('abc123'))
}
