const { product, isActive, subcategory, category } = require('../models/models');
const ApiError = require('../exceptions/apiErrors');

class ProductController {
	async addProduct(req, res) {
		try {
			const { isActiveID, categoryID, subcategoryID, priceID, productGroup_ID, name, number, description } = req.body;
			const response = await product.create({ isActiveID, categoryID, subcategoryID, priceID, productGroup_ID, name, number, description });
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllProduct(req, res) {
		const response = await product.findAll({
			include: [{ model: isActive }, { model: category }, { model: subcategory }],
		});
		return res.json(response);
	}
}

module.exports = new ProductController();
