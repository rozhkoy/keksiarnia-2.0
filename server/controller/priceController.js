const { productPrice } = require('../models/models');

class PriceController {
	async addPrice(req, res) {
		const { price, discountPercent, isActive_ID, discountPrice } = req.body;
		const response = await productPrice.create({ price, discountPercent, isActive_ID, discountPrice });
		return res.json(response);
	}
}

module.exports = new PriceController();
