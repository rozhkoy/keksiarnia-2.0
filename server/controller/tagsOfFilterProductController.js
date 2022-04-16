const { tagOfFilterForProduct } = require('../models/models');

class TagsOfFilterProductController {
	async addTagOfFilterProduct(req, res) {
		const { productID, name } = req.body;
		const response = await tagOfFilterForProduct.create({ productID, name });
		return res.json(response);
	}
}

module.exports = new TagsOfFilterProductController();
