//两位数补零
function padLeft(num) {
  return String(num)[1] && String(num) || '0' + num
}

//三位数补零
function padLeftThreeDigit(num) {
  let numStr = String(num)
  if (numStr.length < 3) {
    num = '0' + num
  }
  return numStr
}

//任意位数补零
function padWithZeros(num, digit) {
  if (typeof num !== 'number' || typeof num !== 'string') {
    return new Error('输入必须是number或string')
  }
  let numStr = String(num)
  while (numStr.length < digit) {
    numStr = '0' + numStr
  }
  return numStr
}

//日期格式化
function dateFormat(date = new Date(), format = 'yyyy-mm-dd hh:mm:ss') {
  if (typeof date === 'number' || typeof date === 'string') {
    date = new Date(date)
  }
  const map = {
    'y': date.getFullYear(),
    'm': padLeft(date.getMonth() + 1),
    'd': padLeft(date.getDate()),
    'h': padLeft(date.getHours()),
    'm': padLeft(date.getMinutes()),
    's': padLeft(date.getSeconds())
  }
  return Object.entries(map).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`${key}+`, 'gi'), value)
  }, format)
}


