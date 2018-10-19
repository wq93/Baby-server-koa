const {GoodsMother: GetGoods} = require('../db')
module.exports = async (ctx, next) => {
  let {sort, pageSize, pageNum, keyword} = ctx.request.query
  let skip = Number((pageNum - 1) * pageSize)
  let limit = Number(pageSize)
  let list = []
  let filterList = []
  let totalPrice = 0
  try {
    let query = new RegExp(keyword, 'i')
    filterList = await GetGoods.find({'displayName': query})
    // list = await GetGoods.find({'displayName': query}).skip(skip).limit(limit).sort({'type': sort})
    list = await GetGoods.find({'displayName': query}).skip(skip).limit(limit)
    filterList.forEach(item => {
      totalPrice += item.price
    })
  } catch (e) {
    ctx.state = {
      code: -1,
      data: {
        errorInfo: e,
        msg: '失败'
      },
    }
  }
  ctx.body = {
    code: 0,
    data: {
      list,
      totalPrice,
      total: filterList.length,
      msg: list.length ? 'success' : '暂无数据'
    }
  }
}
