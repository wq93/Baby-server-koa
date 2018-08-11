const {Goods} = require('../db')

module.exports = async (ctx) => {
  const {displayName, type, count, price, source, remark} = ctx.request.body
  const uuid = `good_${(new Date()).valueOf()}`
  if (displayName && type) {
    try {
      // 避免重复添加
      const findGood = await Goods.find({displayName})
      if (findGood.length) {
        ctx.state = {
          code: -3,
          data: {
            msg: '商品已存在'
          }
        }
        return false
      } else {
        // 创建新数据
        let good = new Goods({displayName, type, count, price, source, remark, uuid})
        await good.save()
        ctx.state = {
          code: 0,
          data: {
            good,
            msg: 'success',
          }
        }
      }
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '添加失败'
        },
      }
    }
  } else {
    ctx.state = {
      code: -2,
      data: {msg: '参数不正确'},
    }
  }

}
