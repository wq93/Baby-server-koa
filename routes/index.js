const router = require('koa-router')()
const controllers = require('../controllers')

router.get('/goods', controllers.goods)

module.exports = router