const { productGroupItem } = require('../models/models');

class ProductGroupItemController {
	async addProductGroupController(req, res) {
		const { name, productGroupID, isActive_ID } = req.body;
		const response = await productGroupItem.create({ name, productGroupID, isActive_ID });
		return res.json(response);
	}
}

module.exports = new ProductGroupItemController();
