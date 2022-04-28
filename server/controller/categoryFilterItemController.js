const { filterCategoryItem, categoryFilter, categoryFilterItem, isActive, subcategory } = require('../models/models');
const { Op } = require("sequelize");

class CategoryFilterItemController {
	async addFilterCategoryItem(req, res) {
		const { isActiveID, categoryFilterID, title } = req.body;
		const response = await categoryFilterItem.create({
			isActiveID,
			categoryFilterID,
			title
		});
		return res.json(response);
	}

	async getAllFilterWithoutPagination(req, res) {
		const response = await categoryFilter.findAll({
			include: [
				{
					model: categoryFilterItem,
					where: {
						isActiveID: 1
					},
					distinct: true
				},
				{ model: isActive }
			],
			distinct: true,
			order: [['categoryFilterID', 'DESC']]
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
						isActiveID: 1
					},
					distinct: true
				},
				{ model: isActive }
			],
			distinct: true,
			limit: limit,
			offset: offset,
			order: [['categoryFilterID', 'DESC']]
		});
		return res.json(response);
	}

	async getFilterListBySubcategory(req, res) {
		const { subcategoryTitle, filterID } = req.query;
		console.log(filterID)
		let filterItemsArray = []
		if(filterID.length > 0) {
			filterItemsArray = filterID.map(item => {
				return {
					filterItemID: item
				}
			})
		}

		console.log(filterItemsArray)

		const response = await categoryFilter.findAll({
			attributes: ['categoryFilterID', 'title'],
			where: {},
			include: [
				{
					model: categoryFilterItem,
					where: {
						[Op.or]: filterItemsArray
					},
					include: [
						{
							model: isActive,
							where: {
								value: 'Yes'
							},
							attributes: []
						}
					],
					attributes: ['filterItemID', 'title'],
					distinct: true
				},
				{ model: subcategory, attributes: ['title'], where: { title: subcategoryTitle } },
				{ model: isActive, attributes: [] }
			]
		});
		return res.json(response);
	}
}

module.exports = new CategoryFilterItemController();
