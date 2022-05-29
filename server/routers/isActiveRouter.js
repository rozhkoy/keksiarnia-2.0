const Router = require('express');
const router = new Router();
const isActiveController = require('../controller/isActiveController');

router.get('/', isActiveController.getIsActiveData);
router.post('/', isActiveController.sendIsActiveData);

module.exports = router;
