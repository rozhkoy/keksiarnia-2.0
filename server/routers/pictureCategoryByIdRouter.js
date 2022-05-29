const Router = require('express');
const router = new Router();
const pictureCategoryByIdController = require('../controller/pictureCategoryByIdController');

router.post('/', pictureCategoryByIdController.changeCategoryPictureById);

module.exports = router;
