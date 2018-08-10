// const Monk = require('monk'); // 链接DB数据库
// const db = new Monk('localhost/dumall')
// goods = db.get('goods') // goods表
const mongoose = require('mongoose');
const db = mongoose.connection;
// 取数据库模型
const Goods = require('./models/goods')
// 连接mongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall')

mongoose.connection
  .on("connected", function () {
    console.log("MongoDB connected sucess")
  })
  .on("error", function () {
    console.log("MongoDB connected error")
  })
  .on("disconnected", function () {
    console.log("MongoDB connected disconnected")
  })

module.exports = {
  Goods
}