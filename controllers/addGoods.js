const {Goods} = require('../db')

module.exports = async (ctx) => {

  console.log('addGoods')
  console.log(ctx.request.body)
  ctx.body = {
    code: -1,
    message: 'error'
  }
  // ctx.state = {
  //   code: 0,
  //   msg: 'success',
  //   data: {}
  // }
}
