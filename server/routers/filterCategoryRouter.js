const Router = require('express');
const router = new Router();
const filterCategoryController = require('../controller/categoryFilterController');

router.post('/', filterCategoryController.addCategoryFilter);

module.exports = router;
