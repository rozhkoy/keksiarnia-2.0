const ApiError = require("../exceptions/apiErrors");
const {isActive} = require('../models/models')

class isActiveController {
	async getIsActiveState(req, res) {
		try {
			const response = await isActive.findAll({
				attributes: ["isActive_ID", "value"]
			})
			return res.json(response)
		} catch (e) {
			throw ApiError.BadRequest('Error Database')
		}
	}
}

module.exports = new isActiveController()