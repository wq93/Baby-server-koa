const router = require('koa-router')({prefix: '/baby'})
const controllers = require('../controllers')


// router.get('/users', controllers.users)

router.get('/getGoods', controllers.getGoods) // 获取商品列表

router.post('/addGood', controllers.addGood) // 添加商品

router.delete('/deleteGood', controllers.deleteGood) // 删除商品

router.put('/updateGood', controllers.updateGood) // 编辑商品

router.post('/uploadImg', controllers.uploadImgConfig, controllers.uploadImg) // 上传图片

router.get('/getImages', controllers.getImages) // 获取图片列表

router.get('/getImageDetail', controllers.getImageDetail) // 获取单个图片详情

router.delete('/deleteImage', controllers.deleteImage) // 删除单个图片详情

router.get('/getGoodsMother', controllers.getGoodsMother) // 获取商品列表

router.post('/addGoodMother', controllers.addGoodMother) // 添加商品
module.exports = router