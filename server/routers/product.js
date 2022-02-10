const Router = require('express')
const uuid = require("uuid")
const router = new Router()
const path = require("path")
const {product, type} = require("../models/models");

router.post("/", async (req, res) => {
	const {name, price, typeID, description} = req.body
	const {img} = req.files
	let fileName = uuid.v4() + ".jpg"
	img.mv(path.resolve(__dirname, "..", "static", fileName));
	const prod = await product.create({name, price, typeID, description, img: fileName})
	res.json(prod)
})
router.get("/", async (req, res) => {
	const {Category} = req.query;
	let queryForProduct

	if(Category){
		console.log("test")
		try {
			queryForProduct = await product.findAll({
					include: [{
						model: type,
						where: {name: Category},
					}]
				}
			)
			return res.json(queryForProduct)
		} catch (e){
			console.log("error")
		}
	} else {
		queryForProduct = await product.findAll()
		return res.json(queryForProduct)
	}
})



module.exports = router