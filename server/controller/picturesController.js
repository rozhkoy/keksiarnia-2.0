const { categoryPicture, subcategoryPicture, productPicture, previewProductPicture } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../exceptions/apiErrors');

class picturesController {
	async sendPicturesMainCategory(req, res) {
		try {
			let { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const response = await categoryPicture.create({ name: fileName });
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}
	async sendPicturesSubcategory(req, res) {
		try {
			let { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const response = await subcategoryPicture.create({ name: fileName });
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async sendProductPictures(req, res) {
		try {
			let { productID, firstPicture, orderOfPicture } = req.body;
			let { img } = req.files;
			let name = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', name));
			const response = await productPicture.create({ name, productID, firstPicture: JSON.parse(firstPicture), orderOfPicture });
			console.log(typeof response.orderOfPicture);
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async sendPreviewProductPictures(req, res) {
		try {
			let { productID } = req.body;
			let { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const response = await previewProductPicture.create({ name: fileName, productID });
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}
}

module.exports = new picturesController();
