const {Goods} = require('../db')

module.exports = async (ctx) => {
  console.log(ctx.request.body)
  ctx.body = {
    code: -1,
    message: 'error'
  }
  // let {displayName, type, count, price, source, remark} = ctx.request.body
  // let uuid = `boby${new Date()}`
  // if (displayName && type) {
  //   try {
  //     let good = new Goods({uuid, displayName, type, count, price, source, remark})
  //     await good.save()
  //     let list = await Goods.find()
  //     ctx.body = list
  //   } catch (e) {
  //     ctx.body = {1,
  //       code: -
  //       message: 'error'
  //     }
  //   }
  // } else {
  //   ctx.body = {
  //     code: -2,
  //     message: ''
  //   }
  // }
}
