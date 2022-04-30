const { productPrice, product, category, subcategory, previewProductPicture, isActive, tagOfFilterForProduct } = require('../models/models');
const { Op, Sequelize } = require('sequelize');
const sequelize = require('sequelize');

class PriceController {
	async addPrice(req, res) {
		const { price, discountPercent, isActiveID, discountPrice } = req.body;
		const response = await productPrice.create({ price, discountPercent, isActiveID, discountPrice });
		return res.json(response);
	}

	async getMaxMinPrice(req, res) {
		const { categoryTitle, subcategoryTitle } = req.query;
		console.log(categoryTitle, subcategoryTitle);
		const maxPrice = await product.findOne({
			attributes: [],
			include: [
				{ model: category, where: { title: categoryTitle }, attributes: [] },
				{ model: subcategory, where: { title: subcategoryTitle }, attributes: [] },
				{ model: isActive, where: { value: 'Yes' }, attributes: [] },
				{
					model: productPrice,
					attributes: ['price'],
				},
			],
			order: [
				[productPrice, "price", 'DESC']
			]
		});

		return res.json(maxPrice);
	}
}

module.exports = new PriceController();
