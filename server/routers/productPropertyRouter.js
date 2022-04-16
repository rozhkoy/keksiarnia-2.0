const Router = require('express');
const router = new Router();
const productPropertyController = require('../controller/productPropertyController');

router.post('/', productPropertyController.addProductProperty);

module.exports = router;
