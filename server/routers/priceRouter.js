const Router = require('express')
const router = new Router
const priceController = require('../controller/priceController')
const { productPrice } = require('../models/models');

router.post('/', priceController.addPrice)
router.get('/', priceController.getAllPrices )

module.exports = router