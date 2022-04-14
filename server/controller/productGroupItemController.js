const { productGroupItem } = require('../models/models');

class ProductGroupItemController {
	async addProductGroupController(req, res) {
		const { name, productGroupID, isActiveID } = req.body;
		const response = await productGroupItem.create({ name, productGroupID, isActiveID });
		return res.json(response);
	}
}

module.exports = new ProductGroupItemController();
