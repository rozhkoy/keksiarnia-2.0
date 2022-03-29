const Router = require("express")
const router = new Router
const productGroupItemController = require('../controller/productGroupItemController')

router.post('/', productGroupItemController.addProductGroupController)

module.exports = router