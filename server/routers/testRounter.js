const Router = require('express');
const { mainTypeProduct } = require('../models/models');
const router = new Router();
const userController = require('../controller/userController');

router.post('/', userController.registration);

router.get('/', async (req, res) => {
	const brands = await mainTypeProduct.findAndCountAll({
		offset: 2,
		limit: 2,
	});
	return res.json(brands);
});

module.exports = router;
