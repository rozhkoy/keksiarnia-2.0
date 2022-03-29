const { propertyGroup } = require('../models/models');


class ProductGroupController {
	async addProductGroupController(req, res) {
		const {isActive_ID, name} = req.body
		const response = propertyGroup.create({isActive_ID, name})
		return res.json(response)
	}
}

module.exports = new ProductGroupController()