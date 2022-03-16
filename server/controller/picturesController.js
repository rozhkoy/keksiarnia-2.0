const {mainTypeProductPicture, categoryPicture} = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class picturesController {
	async sendPicturesMainCategory(req, res) {
		let {img} = req.files
		let fileName = uuid.v4() + '.jpg'
		img.mv(path.resolve(__dirname, '..', 'static', fileName))
		const response = await categoryPicture.create({name: fileName})
		res.json(response)
	}
}

module.exports = new picturesController()