const router = require('koa-router')({prefix: '/baby'})
const controllers = require('../controllers')


// router.get('/users', controllers.users)

router.get('/getGoods', controllers.getGoods) // 获取商品列表

router.post('/addGood', controllers.addGood) // 添加商品

router.delete('/deleteGood', controllers.deleteGood) // 删除商品

router.put('/updateGood', controllers.updateGood) // 编辑商品

router.post('/uploadImg', controllers.uploadImgConfig, controllers.uploadImg) // 上传图片

router.get('/getImages', controllers.getImages) // 获取图片

module.exports = router