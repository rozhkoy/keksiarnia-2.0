// const Router = require('express')
// const {test, filterCategory, filterItem, type} = require("../models/models");
// const { Op } = require("sequelize");
// const router = new Router()
//
// router.post("/",async (req, res) => {
// })
//
// router.get("/", async (req, res) => {
// 	const {Category} = req.query
// 	const brands = await filterCategory.findAll({
// 		include: [
// 			{ model: filterItem },
// 			{ model: type, where: { name: Category }}]
// 	})
// 	return res.json(brands)
// })
//
// module.exports = router