const Router = require('express')
const router = new Router()
const cartController  = require('../controller/cartController')


router.post("/add", cartController.addCard)
router.post("/delete", cartController.deleteCartItem)
router.post("/updata", cartController.updataCartItem)
router.get('/getAllById', cartController.getAllByIdUser)
router.get('/getAllByIdWithFullInfo', cartController.getAllByIdUserWithFullInfo)



module.exports = router
