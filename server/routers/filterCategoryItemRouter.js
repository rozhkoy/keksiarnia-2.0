const Router = require('express');
const router = new Router();
const filterCategoryItemController = require('../controller/categoryFilterItemController');

router.post('/', filterCategoryItemController.addFilterCategoryItem);
router.get('/', filterCategoryItemController.getAllFilterItems);
router.get('/getAll', filterCategoryItemController.getAllFilterWithoutPagination);
router.get('/bySubcategory', filterCategoryItemController.getFilterListBySubcategory);

module.exports = router;
