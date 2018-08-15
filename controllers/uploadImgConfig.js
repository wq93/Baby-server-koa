const multer = require('koa-multer');//加载koa-multer模块
const config = require('../config')
//文件上传
//配置
const storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  // 修改文件名称
  filename: function (req, file, cb) {
    const fileFormat = (file.originalname).split(".")
    // 拼上时间戳防止服务器图片名重复
    cb(null, fileFormat[0] + config.splitMark + Date.now() + "." + fileFormat[fileFormat.length - 1])
  }
})
//加载配置
const upload = multer({storage: storage})

module.exports = upload.single('file')