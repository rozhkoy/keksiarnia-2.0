const Router = require('express')
const router = new Router()
const cartController  = require('../controller/cartController')


router.post("/add", cartController.addCardController)
router.post("/delete", cartController.deleteCardController)
router.post("/updata", cartController.updataCartItem)


module.exports = router