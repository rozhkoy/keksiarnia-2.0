const { productPrice } = require('../models/models');

class PriceController {
	async addPrice(req, res) {
		const { price, discountPercent, isActiveID, discountPrice } = req.body;
		const response = await productPrice.create({ price, discountPercent, isActiveID, discountPrice });
		return res.json(response);
	}
}

module.exports = new PriceController();
