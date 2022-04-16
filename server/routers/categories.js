const Router = require('express');
const router = new Router();
const categoryController = require('../controller/categoryController');

router.post('/', categoryController.addNewCategory);
router.get('/', categoryController.getAllCategoriesWithPagination);
router.get('/getAll', categoryController.getAllCategories)

module.exports = router;
