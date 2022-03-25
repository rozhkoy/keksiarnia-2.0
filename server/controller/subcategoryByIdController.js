const {subcategory, isActive, subcategoryPicture, category} = require("../models/models");

class SubcategoryByIdController {
    async subcategoryById(req, res) {
        const {id} = req.query
        const response = await subcategory.findOne({
            where: {
             id_subcategory: id
            },
            attributes: ["id_subcategory", "title", "createdAt", "updatedAt"],
            include: [
                {model: isActive, attributes: ["isActive_ID", "value"]},
                {model: subcategoryPicture, attributes: ["picture_ID", "name"]},
                {model: category, attributes: ['title']}
            ],
        })
        return res.json(response)
    }
}

module.exports = new SubcategoryByIdController()