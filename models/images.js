// require 默认去node_modules
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({
  'uuid': {type: String}, // id
  'uploadedBy': String, // 上传者
  'uploadedTime': Number, // 上传时间
  'imageName': String, // 图片名称
  'imageURL': String, // 图片路径
  'described': String, // 图片描述
})
// Image 会自动加s去找数据库的集合
module.exports = mongoose.model('Image', produtSchema)
