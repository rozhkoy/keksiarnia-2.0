const {category, categoryPicture, isActive} = require("../models/models");


class CategoryByIdController {

    async GetCategoryById(req, res) {
        const {id} = req.query
        const response = await category.findOne({
            where: {
                id_category: id
            },
            attributes: ["id_category", "isActive_ID","title", "createdAt", "updatedAt"],
            include: [
                {model: categoryPicture, attributes: ["picture_ID", "name"]}
            ],
        })
        res.json(response)
    }
}

module.exports = new CategoryByIdController()