const uuid = require('uuid');
const path = require('path');
const { categoryPicture, subcategoryPicture } = require('../models/models');
const ApiError = require('../exceptions/apiErrors');

class PictureCategoryByIdController {
	async changeCategoryPictureById(req, res) {
		try {
			let { pictureID } = req.body;
			let { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const response = await categoryPicture.update(
				{ name: fileName },
				{
					where: {
						pictureID: pictureID,
					},
				}
			);
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}

	async changeSubcategoryPictureById(req, res) {
		try {
			let { pictureID } = req.body;
			let { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const response = await subcategoryPicture.update(
				{ name: fileName },
				{
					where: {
						pictureID: pictureID,
					},
				}
			);
			res.json(response);
		} catch (e) {
			console.log(e);
			throw ApiError.BadRequest('Error Database');
		}
	}
}

module.exports = new PictureCategoryByIdController();
