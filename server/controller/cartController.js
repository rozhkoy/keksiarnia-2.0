const { cartItem } = require('../models/models');

class CartController {
	async addCardController(req, res) {
		const {productID, quantity, id_user, order} =  req.body;
		const response = await cartItem.create({productID, quantity, id_user, order})
		return res.json(response);
	}

	async deleteCardController(req, res) {
		const {cartItemID} = req.query;
		const response = await cartItem.destroy({
			where: {
				cartItemID: cartItemID
			}
		})
		return res.json(response);
	}

	async updataCartItem(req, res) {
		const {productID, quantity, id_user, order, cardItemID} = req.body;
		const response = await cartItem.update({productID, quantity, id_user, order}, {
			where: {
				cardItemID: cardItemID
			}
		})
		return res.json(response);
	}
}

module.exports = new CartController()
