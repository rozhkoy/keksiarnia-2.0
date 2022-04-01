const { filterCategoryItem, filterCategory } = require('../models/models');

class FilterCategoryItemController {
	async addFilterCategoryItem(req, res) {
		const {isActive_ID, filterCategoryID, title} = req.body
		const response = await filterCategoryItem.create({
			isActive_ID, filterCategoryID, title
		})
		return res.json(response)
	}

	async getAllFilterItems(req, res) {
		let { page, limit } = req.query;
		console.log(page, limit);
		!page && (page = 1);
		!limit && (limit = 5);
		let offset = page * limit - limit;
		const response = await filterCategory.findAndCountAll({
			include: {
				model: filterCategoryItem
			},
			limit: limit,
			offset: offset,
		})

		return res.json(response)
	}
}

module.exports = new FilterCategoryItemController()