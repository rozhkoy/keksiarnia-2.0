const { tagOfFilterForProduct } = require('../models/models');

class TagsOfFilterProductController {
	async addTagOfFilterProduct(req, res) {
		const { productID, filterID } = req.body;
		const response = await tagOfFilterForProduct.create({ productID, filterID });
		return res.json(response);
	}
}

module.exports = new TagsOfFilterProductController();
