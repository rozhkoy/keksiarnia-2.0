const { categoryFilter } = require('../models/models');

class CategoryFilterController {
	async addCategoryFilter(req, res) {
		const { isActive_ID, id_subCategory, title } = req.body;
		const response = await categoryFilter.create({
			isActive_ID,
			id_subCategory,
			title,
		});
		return res.json(response);
	}
}

module.exports = new CategoryFilterController();
