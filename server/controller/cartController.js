const { cartItem, product } = require('../models/models');

class CartController {
	async addCardController(req, res) {
		const { productID, quantity, id_user} = req.body;
		const response = await cartItem.create({ productID, quantity, id_user });
		return res.json(response);
	}

	async deleteCardController(req, res) {
		const { cartItemID } = req.query;
		const response = await cartItem.destroy({
			where: {
				cartItemID: cartItemID,
			},
		});
		return res.json(response);
	}

	async updataCartItem(req, res) {
		const { productID, quantity, id_user, cardItemID } = req.body;
		const response = await cartItem.update(
			{ productID, quantity, id_user },
			{
				where: {
					cardItemID: cardItemID,
				},
			}
		);
		return res.json(response);
	}

	async getAllById(req, res) {
		const { id_user } = req.query;
		const response = await cartItem.findAll({
			where: {
				id_user,
			},
			include: {
				model: product
			}
		});
		return res.json(response)
	}
}

module.exports = new CartController();
