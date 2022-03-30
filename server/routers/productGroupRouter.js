const Router = require('express');
const router = new Router();
const productGroupController = require('../controller/productGroupController');

router.post('/', productGroupController.addProductGroupController);
router.get('/', productGroupController.getAllProductGroupWithPagination);
module.exports = router;
