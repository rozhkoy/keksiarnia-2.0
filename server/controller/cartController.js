const { cartItem, product, previewProductPicture, productPrice, isActive } = require('../models/models');

class CartController {
	async addCard(req, res) {
		const { productID, quantity, id_user} = req.body;
		const response = await cartItem.create({ productID, quantity, id_user });
		return res.json(response);
	}

	async deleteCartItem(req, res) {
		const { cartItemID } = req.body;
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

	async getAllByIdUser(req, res) {
		const { id_user } = req.query;
		const response = await cartItem.findAll({
			attributes: ['cartItemID', 'productID', 'id_user', 'quantity'],
			where: {
				id_user,
			},
			include: {
				model: product,
			}
		});
		return res.json(response)
	}

	async getAllByIdUserWithFullInfo(req, res) {
		const {id_user} = req.query;
		const response = await cartItem.findAll({
			attributes: ['cartItemID', 'productID', 'id_user', 'quantity'],
			where: {
				id_user
			},
			include: {
				model: product,
				include: [
					{model: previewProductPicture, attributes: ['pictureID', 'name']},
					{model: productPrice, attributes: ['priceID', 'discountPrice', 'price', 'discountPercent', 'isActiveID'], include: [{model: isActive, attributes: ['value']}]}
				]
			}
		})
		return res.json(response)
	}
}

module.exports = new CartController();
