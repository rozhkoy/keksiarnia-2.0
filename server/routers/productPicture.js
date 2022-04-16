const Router = require('express');
const router = new Router();
const picturesController = require('../controller/picturesController');

router.post('/', picturesController.sendPicturesProductPicture);

module.exports = router;
