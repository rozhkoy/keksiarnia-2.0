const { category, categoryPicture, isActive } = require('../models/models');
const ApiError = require('../exceptions/apiErrors');

class CategoryByIdController {
	async GetCategoryById(req, res) {
		try {
			const { id } = req.query;
			const response = await category.findOne({
				where: {
					id_category: id,
				},
				attributes: ['id_category', 'isActive_ID', 'title', 'createdAt', 'updatedAt'],
				include: [{ model: categoryPicture, attributes: ['picture_ID', 'name'] }],
			});
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async ChangeCategoryById(req, res) {
		const { title, isActive_ID, id_category } = req.body;
		const response = await category.update({ title, isActive_ID }, { where: { id_category: id_category } });
		return res.json(response);
	}
}

module.exports = new CategoryByIdController();
