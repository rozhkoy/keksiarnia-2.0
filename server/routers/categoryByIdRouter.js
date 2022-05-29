const Router = require('express');
const router = new Router();
const CategoryByIdRouter = require('../controller/categoryByIdController');

router.get('/', CategoryByIdRouter.GetCategoryById);
router.post('/', CategoryByIdRouter.ChangeCategoryById);

module.exports = router;
