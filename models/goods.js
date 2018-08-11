// require 默认去node_modules
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({
  'uuid': {type: String}, // id
  'displayName': String, // 名称
  'type': Number, // 类别 1:日用品 2:洗簌 3:出行
  'count': Number, // 数量
  'price': Number, // 价格
  'source': String, // 来源
  'remark': String // 备注
})
// Good 会自动加s去找数据库的集合
module.exports = mongoose.model('Good', produtSchema)
