const {GoodsMother: Goods} = require('../db')
const config = require('../config')
module.exports = async (ctx, next) => {
  const {uuid} = ctx.request.query
  if (uuid) {
    try {
      const findGood = await config.findList(Goods, {uuid})
      if (findGood.length) {
        await Goods.remove({uuid})
        ctx.state = {
          code: 0,
          data: {
            msg: '删除成功'
          },
        }
      } else {
        ctx.state = {
          code: -4,
          data: {
            msg: '删除失败'
          },
        }
      }
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '删除失败'
        },
      }
    }
  } else {
    ctx.state = {
      code: -2,
      data: {
        msg: '删除失败,参数不正确'
      },
    }
  }
}

