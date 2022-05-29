const Router = require('express');
const router = new Router();
const priceController = require('../controller/priceController');

router.post('/', priceController.addPrice);
router.get('/rangePrice', priceController.getMaxMinPrice);

module.exports = router;
