const Router = require('express')
const router = new Router
const subcategoryByIdController = require('../controller/subcategoryByIdController')

router.get('/', subcategoryByIdController.subcategoryById)

module.exports = router