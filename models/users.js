// require Ĭ��ȥnode_modules
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({
  'uuid': String,
  'username': String,
  'password': String,
  'email': String
})
// Good ���Զ���sȥ�����ݿ�ļ���
module.exports = mongoose.model('User', produtSchema)
