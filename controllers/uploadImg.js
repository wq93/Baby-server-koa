module.exports = async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  } // 上传图片
}