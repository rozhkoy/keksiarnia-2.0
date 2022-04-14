const { category, categoryPicture, isActive } = require('../models/models');
const ApiError = require('../exceptions/apiErrors');

class CategoryByIdController {
	async GetCategoryById(req, res) {
		try {
			const { id } = req.query;
			const response = await category.findOne({
				where: {
					categoryID: id,
				},
				attributes: ['categoryID', 'isActiveID', 'title', 'createdAt', 'updatedAt'],
				include: [{ model: categoryPicture, attributes: ['pictureID', 'name'] }],
			});
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async ChangeCategoryById(req, res) {
		const { title, isActiveID, categoryID } = req.body;
		const response = await category.update({ title, isActiveID }, { where: { categoryID: categoryID } });
		return res.json(response);
	}
}

module.exports = new CategoryByIdController();
