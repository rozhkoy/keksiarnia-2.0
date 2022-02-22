const Router = require('express')
const {mainTypeProduct, mainTypeProductPicture, isActive} = require("../models/models");
const router = new Router


router.post('/', async (req, res) => {
	let {isActive_ID, title, id, picture_ID} = req.body
	if(picture_ID){
		const response = await mainTypeProduct.update({title: title, isActive_ID: isActive_ID, picture_ID: picture_ID} ,{
			where: {
				id_mainTypeProduct: id
			}
		})
		res.json(response)
	} else {
		const response = await mainTypeProduct.update({title: title, isActive_ID: isActive_ID} ,{
			where: {
				id_mainTypeProduct: id
			}
		})
		res.json(response)
	}


})

router.get('/', async (req, res) => {
	const {id} = req.query
	const response = await mainTypeProduct.findOne({
		where: {
			id_mainTypeProduct: id
		},
		attributes: ["id_mainTypeProduct", "title"],
		include: [{
			attributes: ["name"],
			model: mainTypeProductPicture,
		}, {
			attributes: ["value", "isActive_ID"],
			model: isActive,
		}],
	})
	res.json(response)
})



module.exports = router