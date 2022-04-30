const Router = require('express');
const router = new Router();
const priceController = require('../controller/priceController');

router.post('/', priceController.addPrice);

module.exports = router;
