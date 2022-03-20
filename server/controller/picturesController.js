const {mainTypeProductPicture, categoryPicture} = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../exceptions/apiErrors");

class picturesController {
	async sendPicturesMainCategory(req, res) {
		try {
			let {img} = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))
			const response = await categoryPicture.create({name: fileName})
			res.json(response)
		} catch (e) {
			console.log(e)
			throw ApiError.BadRequest('Error Database')
		}
	}
}

module.exports = new picturesController()