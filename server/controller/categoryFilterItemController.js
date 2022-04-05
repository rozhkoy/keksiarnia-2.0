const { filterCategoryItem, categoryFilter, categoryFilterItem, isActive } = require('../models/models');

class CategoryFilterItemController {
	async addFilterCategoryItem(req, res) {
		const { isActive_ID, categoryFilterID, title } = req.body;
		const response = await categoryFilterItem.create({
			isActive_ID,
			categoryFilterID,
			title,
		});
		return res.json(response);
	}

	async getAllFilterWithoutPagination(req, res) {
		const response = await categoryFilter.findAll({
			include: [
				{
					model: categoryFilterItem,
					where: {
						isActive_ID: 1,
					},
					distinct: true,
				},
				{ model: isActive },
			],
			distinct: true,
			order: [['categoryFilterID', 'DESC']],
		});
		return res.json(response);
	}

	async getAllFilterItems(req, res) {
		let { page, limit } = req.query;
		console.log(page, limit);
		!page && (page = 1);
		!limit && (limit = 5);
		let offset = page * limit - limit;
		const response = await categoryFilter.findAndCountAll({
			include: [
				{
					model: categoryFilterItem,
					where: {
						isActive_ID: 1,
					},
					distinct: true,
				},
				{ model: isActive },
			],
			distinct: true,
			limit: limit,
			offset: offset,
			order: [['categoryFilterID', 'DESC']],
		});
		return res.json(response);
	}
}

module.exports = new CategoryFilterItemController();
