const Router = require('express')
const router = new Router;
const subcategoryController = require('../controller/subcategoriesController')

router.post('/', subcategoryController.addNewSubcategory)
router.get('/', subcategoryController.getAllCategoriesWithPagination)

module.exports = router