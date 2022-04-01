const { filterCategoryItem } = require('../models/models');

class FilterCategoryItemController {
	async addFilterCategoryItem(req, res) {
		const {isActive_ID, filterCategoryID, title} = req.body
		const response = await filterCategoryItem.create({
			isActive_ID, filterCategoryID, title
		})
		return res.json(response)
	}
}

module.exports = new FilterCategoryItemController()