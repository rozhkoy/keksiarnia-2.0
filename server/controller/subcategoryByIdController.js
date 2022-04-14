const { subcategory, isActive, subcategoryPicture, category } = require('../models/models');

class SubcategoryByIdController {
	async subcategoryById(req, res) {
		const { id } = req.query;
		const response = await subcategory.findOne({
			where: {
				subcategoryID: id,
			},
			attributes: ['subcategoryID', 'title', 'createdAt', 'updatedAt'],
			include: [
				{ model: isActive, attributes: ['isActiveID', 'value'] },
				{ model: subcategoryPicture, attributes: ['pictureID', 'name'] },
				{ model: category, attributes: ['title', 'categoryID'] },
			],
		});
		return res.json(response);
	}

	async changeSubcategoryById(req, res) {
		const { subcategoryID, title, isActiveID, pictureID, categoryID } = req.body;
		const response = await subcategory.update(
			{
				title,
				isActiveID,
				pictureID,
				categoryID,
			},
			{
				where: {
					subcategoryID,
				},
			}
		);
		return res.json(response);
	}
}

module.exports = new SubcategoryByIdController();
