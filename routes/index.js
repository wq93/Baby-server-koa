const router = require('koa-router')(
  ({
    prefix: '/baby'
  })
)
const controllers = require('../controllers')

router.get('/goods', controllers.goods)
router.post('/addGoods', controllers.addGoods)
router.get('/users', controllers.users)

module.exports = router