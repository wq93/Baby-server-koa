const router = require('koa-router')({prefix: '/baby'})
const controllers = require('../controllers')

// router.get('/users', controllers.users)

router.get('/goods', controllers.goods) // 获取商品列表
router.post('/addGoods', controllers.addGoods) // 添加商品
router.delete('/deleteGood', controllers.deleteGood) // 删除商品
module.exports = router