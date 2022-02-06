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
	const prod = await product.findAll({
		where: {name: "cake"},
		include: [{
			model: type,
			where: {name: "Cake"},
		}]
		}
	)
	return res.json(prod)
})


module.exports = router