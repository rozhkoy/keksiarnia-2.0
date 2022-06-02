const { propertyGroup, productGroup, isActive, productGroupItem, propertyProductItem } = require('../models/models');

class ProductGroupController {
	async addProductGroupController(req, res) {
		const { isActiveID, name } = req.body;
		const response = await productGroup.create({ isActiveID, name });
		return res.json(response);
	}

	async getAllProductGroup(req, res) {
		const response = await productGroup.findAll({
			order: [['name', 'ASC']],
		});
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
				attributes: ['isActiveID', 'value'],
			},
			offset: offset,
			limit: limit,
			order: [['productGroupID', 'DESC']],
		});
		return res.json(response);
	}

	async getProductGroupById(req, res) {
		const { productGroupID } = req.query;
		const response = await productGroup.findOne({
			attributes: ['productGroupID', 'name'],
			where: {
				productGroupID,
			},
			include: [
				{
					model: productGroupItem,
					attributes: ['productGroupItemID', 'name'],
					include: [
						{
							model: propertyProductItem,
							attributes: ['propertyProductItemID', 'value', 'productID'],
						},
					],
				},
			],
		});
		return res.json(response);
	}
}

module.exports = new ProductGroupController();
