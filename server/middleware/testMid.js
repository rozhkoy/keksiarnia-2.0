const ApiError = require("../exceptions/apiErrors");
module.exports = function (req, res, next ) {
	try {
		console.log(req)
		next()
	} catch (e) {
		return next(ApiError.UnauthorizedError())
	}
}