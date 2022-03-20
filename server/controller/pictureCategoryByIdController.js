const uuid = require("uuid");
const path = require("path");
const {categoryPicture} = require("../models/models");
const ApiError = require("../exceptions/apiErrors");

class PictureCategoryByIdController {
    async changePictureById(req, res) {
        try {
            let {picture_ID} = req.body
            let {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const response = await categoryPicture.update({name: fileName}, {
                where: {
                    picture_ID: picture_ID
                }
            })
            res.json(response)
        } catch (e) {
            console.log(e)
            throw ApiError.BadRequest('Error Database')
        }
    }
}


module.exports = new PictureCategoryByIdController()