// require 默认去node_modules
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({
  'uuid': String,
  'username': String,
  'password': String,
  'email': String
})
// Good 会自动加s去找数据库的集合
module.exports = mongoose.model('User', produtSchema)
