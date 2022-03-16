const ApiError = require("../exceptions/apiErrors");
const {mainTypeProduct, category} = require("../models/models");

class categoryController {
	async addNewCategory(req, res) {
		try {
			const {isActive_ID, title, picture_ID} = req.body
			const response = await category.create({isActive_ID, title, picture_ID})
			return  res.json(response)
		} catch (e) {
			console.log(e)
			throw ApiError.BadRequest('Error Database')
		}
	}
	async getAllCategories(req, res) {
		try {
			const response = await category.findAll()
			return res.json(response)
		} catch (e) {
			console.log(e)
			throw ApiError.BadRequest('Error Database')
		}
	}
}

module.exports = new categoryController()