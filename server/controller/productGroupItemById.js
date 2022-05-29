const { productGroupItem } = require('../models/models');

class ProductGroupItemById {
	async getProductGroupById(req, res) {
		const { id } = req.query;
		const response = await productGroupItem.findAll({
			where: {
				productGroupID: id,
			},
		});
		return res.json(response);
	}
}

module.exports = new ProductGroupItemById();
