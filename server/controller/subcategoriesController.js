const ApiError = require('../exceptions/apiErrors');
const { subcategory, category, isActive, categoryPicture, subcategoryPicture } = require('../models/models');

class subcategoriesController {
	async addNewSubcategory(req, res) {
		try {
			const { isActive_ID, id_category, picture_ID, title } = req.body;
			const response = await subcategory.create({ isActive_ID, id_category, picture_ID, title });
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
				attributes: ['id_subcategory', 'title', 'createdAt', 'updatedAt'],
				include: [
					{ model: isActive, attributes: ['isActive_ID', 'value'] },
					{ model: subcategoryPicture, attributes: ['picture_ID', 'name'] },
					{ model: category, attributes: ['title'] },
				],
				order: [['id_subcategory', 'DESC']],
				offset: offset,
				limit: limit,
			});
			return res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}
}

module.exports = new subcategoriesController();
