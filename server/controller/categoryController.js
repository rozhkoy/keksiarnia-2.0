const ApiError = require('../exceptions/apiErrors');
const { mainTypeProduct, category, isActive, categoryPicture, subcategory } = require('../models/models');

class categoryController {
	async addNewCategory(req, res) {
		try {
			const { isActiveID, title, pictureID } = req.body;
			const response = await category.create({ isActiveID, title, pictureID });
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllCategoriesWithPagination(req, res) {
		try {
			let { page, limit } = req.query;
			console.log(limit, page);
			if (page <= 0) {
				page = 1;
			}
			if (limit <= 0) {
				limit = 1;
			}
			console.log(limit, page);
			let offset = page * limit - limit;
			const response = await category.findAndCountAll({
				attributes: ['categoryID', 'title', 'createdAt', 'updatedAt'],
				include: [
					{ model: isActive, attributes: ['isActiveID', 'value'] },
					{ model: categoryPicture, attributes: ['pictureID', 'name'] },
				],
				order: [['categoryID', 'DESC']],
				offset: offset,
				limit: limit,
			});

			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllCategories(req, res) {
		try {
			const response = await category.findAll({
				order: [['title', 'ASC']],
				include: [
					{ model: isActive, attributes: ['isActiveID', 'value'], where: { value: 'Yes' } },
					{ model: categoryPicture, attributes: ['pictureID', 'name'] },
				],
			});
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async getAllCategoriesWithSubcategories(req, res) {
		try {
			const response = await category.findAll({
				include: [{ model: subcategory }],
			});
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}
}

module.exports = new categoryController();
