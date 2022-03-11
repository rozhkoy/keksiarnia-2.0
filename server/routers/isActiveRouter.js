const Router = require('express')
const {response} = require("express");
const {isActive} = require("../models/models");
const router = new Router;
const isActiveController = require('../controller/isActiveController')

router.post('/', async (req, res) => {
	const {value} = req.query
	const response = await isActive.create({value})
	res.json(response)
})

router.get('/', isActiveController.getIsActiveState )

module.exports = router