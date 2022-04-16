const { propertyProductItem } = require('../models/models');

class ProductPropertyController {
	async addProductProperty(req, res) {
		const { value, productGroupItemID } = req.body;
		const response = await propertyProductItem.create({ value, productGroupItemID });
		return res.json(response);
	}
}

module.exports = new ProductPropertyController();
