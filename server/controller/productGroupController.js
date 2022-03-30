const { propertyGroup, productGroup, isActive } = require('../models/models');

class ProductGroupController {
	async addProductGroupController(req, res) {
		const { isActive_ID, name } = req.body;
		const response = await productGroup.create({ isActive_ID, name });
		return res.json(response);
	}

	async getAllProductGroupWithPagination(req, res) {
		let { page, limit } = req.query;
		console.log(page, limit);
		!page && (page = 1);
		!limit && (limit = 5);
		let offset = page * limit - limit;
		console.log(offset, page, limit);
		const response = await productGroup.findAndCountAll({
			include: {
				model: isActive,
				attributes: ['isActive_ID', 'value'],
			},
			offset: offset,
			limit: limit,
			order: [['productGroupID	', 'DESC']],
		});
		return res.json(response);
	}
}

module.exports = new ProductGroupController();
