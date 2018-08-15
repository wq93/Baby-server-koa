const {Images} = require('../db')
const config = require('../config')

module.exports = async (ctx, next) => {
  const file = ctx.req.file
  const {uploadedBy, described} = ctx.req.body

  if (file && uploadedBy) {
    const uploadedTime = parseInt(ctx.req.body.uploadedTime)
    const uuid = `image_${Date.now()}`
    const imageName = file.filename.split(config.splitMark)[0]
    const imageURL = config.baseImageURL + file.filename
    // 创建新数据
    try {
      let image = new Images({uploadedBy, uploadedTime, described, uuid, imageName, imageURL})
      await image.save()
      ctx.state = {
        code: 0,
        data: {
          image,
          msg: 'success',
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
      code: -6,
      data: {msg: '请上传照片和填写上传者!'},
    }
  }
}