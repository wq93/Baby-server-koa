const {Goods} = require('../db')
module.exports = async (ctx, next) => {
  let list = await Goods.find()
  ctx.body = {
    code: 0,
    list,
    msg: '1'
  }
}
