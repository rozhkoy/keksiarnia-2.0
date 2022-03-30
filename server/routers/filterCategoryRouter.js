const Router = require('express');
const router = new Router();
const filterCategoryController = require('../controller/filterCategoryController');

router.post('/', filterCategoryController.addFilterCategory);

module.exports = router;
