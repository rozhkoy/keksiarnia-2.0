const Router = require('express')
const picturesController = require('../controller/picturesController')
const router = new Router


router.post('/', picturesController.sendPicturesMainCategory)

module.exports = router