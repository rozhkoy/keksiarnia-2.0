const Router = require('express')
const router = new Router
const filterCategoryItemController = require('../controller/categoryFilterItemController')

router.post('/', filterCategoryItemController.addFilterCategoryItem)
router.get('/', filterCategoryItemController.getAllFilterItems)

module.exports = router