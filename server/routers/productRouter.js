const Router = require('express');
const router = new Router();
const productController = require('../controller/productController');

router.post('/', productController.addProduct);
router.get('/', productController.getAllProduct);
router.get('/bySubcategory', productController.getAllProductByCategory);

module.exports = router;
