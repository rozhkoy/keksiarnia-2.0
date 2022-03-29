const Router = require('express')
const router = new Router
const productGroupController = require('../controller/productGroupController')

router.post('/', productGroupController.addProductGroupController)

module.exports = router