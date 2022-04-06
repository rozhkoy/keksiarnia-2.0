const { productPrice } = require('../models/models');

class PriceController {
	async addPrice(req, res) {
		const {price, isActive_ID, discountPrice, discountPercent} = req.body
		const response = await productPrice.create({price, isActive_ID, discountPrice, discountPercent})
		return res.json(response)
	}
	async getAllPrices(req, res) {
		const response = await productPrice.findAll()
		return res.json(response)
	}
}

module.exports = new PriceController()