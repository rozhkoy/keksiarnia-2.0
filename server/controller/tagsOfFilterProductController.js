const { tagOfFilterForProduct } = require('../models/models');

class TagsOfFilterProductController {
	async addTagOfFilterProduct(req, res) {
		const { productID, filterItemID } = req.body;
		const response = await tagOfFilterForProduct.create({ productID, filterItemID });
		return res.json(response);
	}
}

module.exports = new TagsOfFilterProductController();
