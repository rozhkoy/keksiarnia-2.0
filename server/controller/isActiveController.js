const ApiError = require('../exceptions/apiErrors');
const { isActive } = require('../models/models');

class isActiveController {
	async getIsActiveData(req, res) {
		try {
			const response = await isActive.findAll({
				attributes: ['isActiveID', 'value'],
			});
			return res.json(response);
		} catch (e) {
			throw ApiError.BadRequest('Error Database');
		}
	}
	я;
	async sendIsActiveData(req, res) {
		try {
			const { value } = req.body;
			const response = await isActive.create({ value: value });
			return res.json(response);
		} catch (e) {
			throw ApiError.BadRequest('Error Database');
		}
	}
}

module.exports = new isActiveController();
