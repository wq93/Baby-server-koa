const {Images: GetImages} = require('../db')
module.exports = async (ctx, next) => {
  let {uuid} = ctx.request.query
  console.log(uuid)
  if (uuid) {
    try {
      let item = await GetImages.find({uuid})
      ctx.body = {
        code: 0,
        data: {
          detail: item[0],
          msg: 'success'
        }
      }
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          errorInfo: e,
          msg: '失败'
        },
      }
    }
  } else {
    ctx.state = {
      code: -2,
      data: {
        msg: '失败,参数不正确'
      },
    }
  }
}
