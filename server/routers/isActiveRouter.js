const Router = require('express');
const router = new Router();
const isActiveController = require('../controller/isActiveController');

router.get('/', isActiveController.getIsActiveState);
router.post('/', isActiveController.sendIsActiveState);

module.exports = router;
