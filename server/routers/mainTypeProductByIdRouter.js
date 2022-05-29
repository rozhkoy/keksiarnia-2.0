const Router = require('express');
const { mainTypeProduct, mainTypeProductPicture, isActive } = require('../models/models');
const router = new Router();

router.post('/', async (req, res) => {
	let { isActiveID, title, id, pictureID } = req.body;
	if (pictureID) {
		const response = await mainTypeProduct.update(
			{ title: title, isActiveID: isActiveID, pictureID: pictureID },
			{
				where: {
					id_mainTypeProduct: id,
				},
			}
		);
		res.json(response);
	} else {
		const response = await mainTypeProduct.update(
			{ title: title, isActiveID: isActiveID },
			{
				where: {
					id_mainTypeProduct: id,
				},
			}
		);
		res.json(response);
	}
});

router.get('/', async (req, res) => {
	const { id } = req.query;
	const response = await mainTypeProduct.findOne({
		where: {
			id_mainTypeProduct: id,
		},
		attributes: ['id_mainTypeProduct', 'title'],
		include: [
			{
				attributes: ['name'],
				model: mainTypeProductPicture,
			},
			{
				attributes: ['value', 'isActiveID'],
				model: isActive,
			},
		],
	});
	res.json(response);
});

module.exports = router;
