const Router = require('express');
const router = new Router();
const productGroupItemById = require('../controller/productGroupItemById');

router.get('/', productGroupItemById.getProductGroupById);

module.exports = router;
