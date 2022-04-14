const { categoryFilter } = require('../models/models');

class CategoryFilterController {
	async addCategoryFilter(req, res) {
		const { isActiveID, subcategoryID, title } = req.body;
		const response = await categoryFilter.create({
			isActiveID,
			subcategoryID,
			title,
		});
		return res.json(response);
	}
}

module.exports = new CategoryFilterController();
