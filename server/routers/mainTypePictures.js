const Router = require('express')
const uuid = require('uuid')
const path = require('path')
const {mainTypeProductPicture} = require('../models/models');
const router = new Router


router.post('/', async (req, res) => {
	let {img} = req.files
	let fileName = uuid.v4() + '.jpg'
	img.mv(path.resolve(__dirname, '..', 'static', fileName))
	const response = await mainTypeProductPicture.create({name: fileName})
	res.json(response)
})

router.get('/', async (req, res) => {
	const response = await mainTypeProductPicture.findAll()
	res.json(response)
})

module.exports = router