const { filterCategory, filterCategoryItem } = require('../models/models');

class FilterCategoryController {
	async addFilterCategory(req, res) {
		const { isActive_ID, id_subCategory, name, title } = req.body;
		const response = await filterCategory.create({
			isActive_ID,
			id_subCategory,
			name,
			title,
		});
		return res.json(response)
	}
}

module.exports = new FilterCategoryController()
