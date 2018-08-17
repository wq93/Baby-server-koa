module.exports = {
  port: '3000',
  splitMark: '___wq93Baby___',
  baseImageURL: 'http://localhost:3000/images/',
  async findList(collectionType, keyword) {
    let list = []
    try {
      list = await collectionType.find(keyword)
    } catch (e) {
      list = []
    }
    return list
  },
  formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    function padLeftZero(str) {
      return ('00' + str).substr(str.length);
    }
    return fmt;
  }
}