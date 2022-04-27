const { product, isActive, subcategory, category, previewProductPicture, productPrice } = require('../models/models');
const ApiError = require('../exceptions/apiErrors');

class ProductController {
	async addProduct(req, res) {
		try {
			const { isActiveID, categoryID, subcategoryID, priceID, productGroupID, name, number, description } = req.body;
			const response = await product.create({ isActiveID, categoryID, subcategoryID, priceID, productGroupID, name, number, description });
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllProduct(req, res) {
		const response = await product.findAll({
			include: [{ model: category }, { model: subcategory }, {model: previewProductPicture}],
		});
		return res.json(response);
	}

	async getAllProductByCategory(req, res) {
		let {categoryTitle, subcategoryTitle, page, limit} = req.query
		console.log(categoryTitle, subcategoryTitle, page, limit);
		if (page <= 0) {
			page = 1;
		}
		if (limit <= 0) {
			limit = 1;
		}
		console.log(limit, page);
		let offset = page * limit - limit;
		const response = await product.findAndCountAll({
			attributes: ["productID", "name", ],
			include: [
				{ model: category, where: {title: categoryTitle}, attributes: [] },
				{ model: subcategory, where: {title: subcategoryTitle}, attributes: []},
				{ model: previewProductPicture, attributes: ["pictureID", "name"]},
				{ model: isActive, where: {value: "Yes"}, attributes: []},
				{
					model: productPrice,
					include: [
						{
							model: isActive,
							attributes: ["value"]
						}
					],
					attributes: ["discountPrice", "price", "discountPercent"]
				}
			],
			offset: offset,
			limit: limit,
		});
		return res.json(response)
	}
}

module.exports = new ProductController();
