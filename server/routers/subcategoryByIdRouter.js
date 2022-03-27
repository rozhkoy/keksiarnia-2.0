const Router = require('express');
const router = new Router();
const subcategoryByIdController = require('../controller/subcategoryByIdController');

router.get('/', subcategoryByIdController.subcategoryById);
router.post('/', subcategoryByIdController.changeSubcategoryById)

module.exports = router;
