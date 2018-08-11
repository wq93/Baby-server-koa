const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
// 引入路由分发
const router = require('./routes')
const config = require('./config')
const response = require('./middlewares/response')


app
  .use(response) // 使用响应处理中间件
  .use(bodyParser()) // 解析请求体
  .use(router.routes())
  .use(router.allowedMethods()())
  .listen(config.port, () => console.log(`listening on port ${config.port}`))
// 启动程序，监听端口