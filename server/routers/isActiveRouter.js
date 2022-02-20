const Router = require('express')
const {response} = require("express");
const {isActive} = require("../models/models");
const router = new Router;

router.post('/', async (req, res) => {
	const {value} = req.query
	const response = await isActive.create({value})
	res.json(response)
})

router.get('/', async (req, res) => {
	const response = await isActive.findAll()
	res.json(response)
})

module.exports = router