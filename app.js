const Koa = require('koa');
const app = new Koa();
// 引入路由分发
const router = require('./routes')
const config = require('./config')

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port, () => console.log(`listening on port ${config.port}`))
// 启动程序，监听端口