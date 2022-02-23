const Router = require('express')
const {mainTypeProduct, mainTypeProductPicture, isActive} = require("../models/models");
const router = new Router

router.post('/', async (req, res) => {
	let {isActive_ID, picture_ID, title} = req.body
	console.log(isActive_ID, picture_ID)
	const response = await mainTypeProduct.create({title: title, isActive_ID: isActive_ID, picture_ID: picture_ID})
	res.json(response)
})


router.get('/', async (req, res) => {
	const response = await mainTypeProduct.findAll({
		attributes: ["id_mainTypeProduct", "title"],
		order: [
			['id_mainTypeProduct', 'DESC']],
		include: [{
			attributes: ["name"],
			model: mainTypeProductPicture,
		}, {
			attributes: ["value"],
			model: isActive,
		}],
	})
	res.json(response)
})

module.exports = router