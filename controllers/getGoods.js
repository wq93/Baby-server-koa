const {Goods: GetGoods} = require('../db')
module.exports = async (ctx, next) => {
  let {sort, pageSize, pageNum, keyword} = ctx.request.query
  let skip = Number((pageNum - 1) * pageSize)
  let limit = Number(pageSize)
  let list = []
  let filterList = []
  try {
    let query = new RegExp(keyword, 'i')
    filterList = await GetGoods.find({'displayName': query})
    list = await GetGoods.find({'displayName': query}).skip(skip).limit(limit).sort({'type': sort})
  } catch (e) {

  }
  ctx.body = {
    code: 0,
    data: {
      list,
      total: filterList.length,
      msg: list.length ? 'success' : '暂无数据'
    }
  }
}
