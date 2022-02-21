const Router = require('express')
const {mainTypeProduct} = require("../models/models");
const router = new Router

router.post('/', async (req, res) => {
	let {isActive_ID, picture_ID, title} = req.body
	console.log(isActive_ID, picture_ID)
	const response = await mainTypeProduct.create({title: title, isActive_ID: isActive_ID, picture_ID: 1})
	res.json(response)
})


router.get('/', async (req, res) => {
	const response = await mainTypeProduct.findAll()
	res.json(response)
})

module.exports = router