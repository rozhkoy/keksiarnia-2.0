const ApiError = require("../exceptions/apiErrors");
const {mainTypeProduct, category} = require("../models/models");

class categoryController {
    async addNewCategory(req, res) {
        try {
            const {isActive_ID, title, picture_ID} = req.body
            const response = await category.create({isActive_ID, title, picture_ID})
            return res.json(response)
        } catch (e) {
            console.log(e)
            throw ApiError.BadRequest('Error Database')
        }
    }

    async getAllCategories(req, res) {
        try {
            let {page, limit} = req.query
            console.log(limit, page)
            if (page <= 0) {
                page = 1
            }
            if (limit <= 0) {
				limit = 1
            }
            console.log(limit, page)
            let offset = page * limit - limit
            const response = await category.findAndCountAll({
            	offset: offset,
            	limit: limit
            })

            return res.json(response)
        } catch (e) {
            console.log(e)
            throw ApiError.BadRequest('Error Database')
        }
    }
}

module.exports = new categoryController()