const { filterCategoryItem } = require('../models/models');

class FilterCategoryItemController {
	async addFilterCategoryItem(req, res) {
		const {isActive_ID, filterCategoryID, name} = req.body
		const response = await filterCategoryItem.create({
			isActive_ID, filterCategoryID, name
		})
		return res.json(response)
	}
}

module.exports = new FilterCategoryItemController()