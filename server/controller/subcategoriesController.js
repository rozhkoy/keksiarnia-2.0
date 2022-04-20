const ApiError = require('../exceptions/apiErrors');
const { subcategory, category, isActive, categoryPicture, subcategoryPicture } = require('../models/models');

class subcategoriesController {
	async addNewSubcategory(req, res) {
		try {
			const { isActiveID, categoryID, pictureID, title } = req.body;
			const response = await subcategory.create({ isActiveID, categoryID, pictureID, title });
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllSubcategories(req, res) {
		try {
			const response = await subcategory.findAll();
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllCategoriesWithPagination(req, res) {
		try {
			let { page, limit } = req.query;
			if (page <= 0) {
				page = 1;
			}
			if (limit <= 0) {
				limit = 1;
			}
			let offset = page * limit - limit;
			const response = await subcategory.findAndCountAll({
				attributes: ['subcategoryID', 'title', 'createdAt', 'updatedAt'],
				include: [
					{ model: isActive, attributes: ['isActiveID', 'value'] },
					{ model: subcategoryPicture, attributes: ['pictureID', 'name'] },
					{ model: category, attributes: ['title'] },
				],
				order: [['subcategoryID', 'DESC']],
				offset: offset,
				limit: limit,
			});
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}
	async getSubcategoriesByCategory(req, res) {
		try {
			const {categoryTitle} = req.query
			const response = await category.findAll({
				where: {title: categoryTitle},
				include: [
					{ model: subcategory, include: [
							{ model: isActive, attributes: ['isActiveID', 'value'], where: {value: "Yes"} },
							{ model: subcategoryPicture, attributes: ['pictureID', 'name'] },
						] }
				]
			})
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}
}

module.exports = new subcategoriesController();
