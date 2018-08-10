// require 默认去node_modules
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "salePrice":Number,
  "checked":String,
  "productNum":Number,
  "productImage":String
})
// Good 会自动加s去找数据库的集合
module.exports = mongoose.model('Good', produtSchema)
