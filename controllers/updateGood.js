const {Goods} = require('../db')
const config = require('../config')

module.exports = async (ctx) => {
  const {displayName, type, count, price, source, remark, uuid} = ctx.request.body
  if (displayName && type && uuid) {
    try {
      const list = await config.findList(Goods, {uuid})
      const listByDisplayName = await config.findList(Goods, {displayName})
      // 不得重名 且区别不是当前条数据
      if (listByDisplayName.length > 0 && uuid !== listByDisplayName[0].uuid) {
        ctx.state = {
          code: -3,
          data: {
            msg: '修改失败,商品名重复'
          },
        }
        return false
      }
      if (list.length) {
        let conditions = {uuid}
        let updates = {$set: {displayName, type, count, price, source, remark}}
        await Goods.update(conditions, updates) // 修改
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
            msg: '修改失败',
          }
        }
      }
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '修改失败'
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
