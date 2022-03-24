const ApiError = require("../exceptions/apiErrors");
const {subcategory} = require("../models/models");

class subcategoriesController {
    async addNewSubcategory(req, res) {
        try{
            const {isActive_ID, id_category, picture_ID, title} = req.body
            const response = await subcategory.create({isActive_ID, id_category, picture_ID, title})
            return res.json(response)
        } catch (e) {
            console.log(e)
            throw ApiError.BadRequest('Error Database')
        }
    }
}

module.exports = new subcategoriesController()