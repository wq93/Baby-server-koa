// const Monk = require('monk'); // 链接DB数据库
// const db = new Monk('localhost/dumall')
// goods = db.get('goods') // goods表
const mongoose = require('mongoose');
const db = mongoose.connection;
// 取数据库模型
const Goods = require('./models/goods')
const GoodsMother = require('./models/goods_mother')
const Users = require('./models/users')
const Images = require('./models/images')
// 连接mongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/wangqi')

db.on("connected", function () {
  console.log("MongoDB connected sucess")
})
db.on("error", function () {
  console.log("MongoDB connected error")
})
db.on("disconnected", function () {
  console.log("MongoDB connected disconnected")
})

module.exports = {
  Goods, Users, Images, GoodsMother
}