import { propertyProduct, propertyProductItem } from '../models/models';

class ProductPropertyController {
	async addProductProperty(req, res) {
		const {} = req.body
		const response = await propertyProductItem.create()
		return res.json(response)
	}
}