const {Users} = require('../db')

module.exports = async (ctx, next) => {
  // let {username, passeword, email} = ctx.request.query
  // if (username && passeword && email) {
  try {
    // let user = new Users({username, passeord, email})
    // await user.save()
    let list = await Users.find()
    ctx.body = list
  } catch (e) {
    ctx.body = {
      code: -1,
      message: 'error'
    }
  }
  // } else {
  //   ctx.body = {
  //     code: -2,
  //     message: '参数不正确'
  //   }
  // }
}
