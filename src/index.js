// 分转元
const fen2yuan = (fen) => {
  if (fen === 0) {
    return 0
  }
  if (!fen) {
    return 0
  }
  let num = fen
  num = fen * 0.01// 分到元
  num += ''// 转成字符串
  num = toDecimal2(num)
  var reg = num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g// 千分符的正则
  num = num.replace(reg, '$1,')  // 千分位格式化
  return '￥' + num
}
const toDecimal2 = (x) => {
  var f = parseFloat(x)
  if (isNaN(f)) {
    return false
  }
  f = Math.round(x * 100) / 100
  var s = f.toString()
  var rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + 2) {
    s += '0'
  }
  return s
}
export default fen2yuan