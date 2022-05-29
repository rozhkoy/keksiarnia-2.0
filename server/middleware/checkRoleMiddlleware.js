const ApiError = require('../exceptions/apiErrors');
const tokenService = require('../service/tokenService');
module.exports = function (req, res, next) {
	try {
		const authorizationHeader = req.headers.authorization;
		console.log('test');
		if (!authorizationHeader) {
			return next(ApiError.UnauthorizedError());
		}
		const accessToken = authorizationHeader.split(' ')[1];
		if (!accessToken) {
			return next(ApiError.UnauthorizedError());
		}
		const verifyToken = tokenService.validateAccessToken(accessToken);
		console.log(verifyToken);
		if (!verifyToken) {
			return next(ApiError.UnauthorizedError());
		}
		console.log(verifyToken);
		if (verifyToken.role == 'ADMIN') {
			next();
		} else {
			return next(ApiError.BadRequest('no access'));
		}
	} catch (e) {
		return next(ApiError.UnauthorizedError());
	}
};
