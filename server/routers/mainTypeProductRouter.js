const Router = require('express')
const {mainTypeProduct} = require("../models/models");
const router = new Router

router.post('/', async (req, res) => {
	const {mainTypeProductName, } = req.query
	const response = await mainTypeProduct.create({mainTypeProductName: mainTypeProductName, isActiveID: 2, mainTypeProductPictureID: 1})
	res.json(response)
})

router.get('/', async (req, res) => {
	const response = await mainTypeProduct.findAll()
	res.json(response)
})

module.exports = router