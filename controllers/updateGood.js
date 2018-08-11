const {Goods} = require('../db')
const config = require('../config')

module.exports = async (ctx) => {
  const {displayName, type, count, price, source, remark, uuid} = ctx.request.body
  console.log(displayName, type, count, price, source, remark, uuid)
  if (displayName && type && uuid) {
    try {
      const findGood = await config.findList(Goods, {uuid})
      if (findGood.length) {
        let conditions = {uuid};
        let updates = {$set: {displayName, type, count, price, source, remark}}
        await Goods.update(conditions, updates)
        ctx.state = {
          code: 0,
          data: {
            msg: '修改成功'
          },
        }
      } else {
        ctx.state = {
          code: -5,
          data: {
            msg: '保存失败',
          }
        }
      }
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '保存失败'
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
