const { product, isActive, subcategory, category, previewProductPicture, productPrice, tagOfFilterForProduct, productGroup, productGroupItem, propertyProductItem,
	categoryFilterItem
} = require('../models/models');
const ApiError = require('../exceptions/apiErrors');
const { Op } = require('sequelize');
const { values } = require('pg/lib/native/query');

class ProductController {
	async addProduct(req, res) {
		try {
			const { isActiveID, categoryID, subcategoryID, priceID, productGroupID, name, number, description } = req.body;
			const response = await product.create({
				isActiveID,
				categoryID,
				subcategoryID,
				priceID,
				productGroupID,
				name,
				number,
				description,
			});
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllProduct(req, res) {
		const response = await product.findAll({
			include: [{ model: category }, { model: subcategory }, { model: previewProductPicture }, { model: tagOfFilterForProduct }],
		});
		return res.json(response);
	}

	async getAllProductByCategory(req, res) {
		let { categoryTitle, subcategoryTitle, page, limit, filterID, maxPrice, minPrice } = req.query;
		console.log(categoryTitle, subcategoryTitle, page, limit, filterID);
		if (!filterID) {
			filterID = [];
		}

		console.log(categoryTitle, subcategoryTitle, page, limit, filterID);

		if (page <= 0) {
			page = 1;
		}
		if (limit <= 0) {
			limit = 1;
		}
		console.log(limit, page);
		let offset = page * limit - limit;
		const response = await product.findAndCountAll({
			attributes: ['productID', 'name', 'priceID'],
			include: [
				{ model: category, where: { title: categoryTitle }, attributes: [] },
				{ model: subcategory, where: { title: subcategoryTitle }, attributes: [] },
				{ model: previewProductPicture, attributes: ['pictureID', 'name'] },
				{ model: isActive, where: { value: 'Yes' }, attributes: [] },
				{
					model: productPrice,
					attributes: ['priceID', 'discountPrice', 'isActiveID', 'price', 'discountPercent'],
					include: [{ model: isActive }],
					where: {
						price: {
							[Op.between]: [minPrice, maxPrice],
						},
					},
				},
				{
					model: tagOfFilterForProduct,
					where: {
						filterID: {
							[Op.or]: filterID,
						},
					},
					// attributes: []
				},
			],
			distinct: true,
			offset: offset,
			limit: limit,
		});
		return res.json(response);
	}

	async getProductById(req, res) {
		const response = await product.findAndCountAll({
			// attributes: ['name', 'description', 'number'],
			include: [
				{
					model: productGroup,
					include: [
						{
							model: productGroupItem,
							include: [
								{
									model: propertyProductItem,
								}
							],
						},
					],
				},
				// { model: productPrice, include: [{model: isActive, attributes: ["value"]}], attributes: ["discountPrice", "price", 'discountPercent']},
				// { model: tagOfFilterForProduct, include: [{model: categoryFilterItem }] },
			],
			separate:true
		});
		// //
		// const response = await product.find( {
		// 	include: [{model: propertyProductItem}]
		// })
		return res.json(response);
	}
}

module.exports = new ProductController();
