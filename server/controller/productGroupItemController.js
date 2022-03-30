const { propertyProductItem, productGroupItem } = require('../models/models');

class ProductGroupItemController {
	async addProductGroupController(req, res) {
		const { name, productGroupID } = req.body;
		const response = await productGroupItem.create({ name, productGroupID });
		return res.json(response);
	}
}

module.exports = new ProductGroupItemController();
