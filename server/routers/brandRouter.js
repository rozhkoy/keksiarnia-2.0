const Router = require('express');
const { brand } = require('../models/models');
const router = new Router();

router.post('/', async (req, res) => {
	const { brandName } = req.query;
	const response = await brand.create({ brandName: brandName, isActiveID: 2 });
	res.json(response);
});

module.exports = router;
