const Router = require('express')
const {subTypeProduct} = require("../models/models");
const router = new Router

router.post("/", async (req, res) => {
	const {subTypeProductName} = req.query
	const response = await subTypeProduct.create({subTypeProductPictureID: 1, isActiveID: 2, mainTypeProductID: 2, subTypeProductName: subTypeProductName})
	res.json(response)
})


module.exports = router