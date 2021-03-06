const jwt = require('jsonwebtoken');
const { userData, tokenData } = require('../models/models');

class TokenService {
	generateToken(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, { expiresIn: '10s' });
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, { expiresIn: '30d' });
		return {
			refreshToken,
			accessToken,
		};
	}

	async saveToken(userID, refreshToken) {
		const foundToken = await tokenData.findOne({
			where: {
				user_id: userID,
			},
		});
		if (foundToken) {
			const rewriteToken = await tokenData.update(
				{ refreshToken },
				{
					where: {
						user_id: userID,
					},
				}
			);
			return rewriteToken;
		}
		const token = await tokenData.create({
			user_id: userID,
			refreshToken: refreshToken,
		});

		return token;
	}

	async removeToken(refreshToken) {
		const remoteToken = await tokenData.destroy({
			where: {
				refreshToken: refreshToken,
			},
		});
		return remoteToken;
	}

	validateAccessToken(token) {
		try {
			const verifyToken = jwt.verify(token, process.env.JWT_ACCESS_KEY);
			return verifyToken;
		} catch (e) {
			return null;
		}
	}

	validateRefreshToken(token) {
		try {
			const verifyToken = jwt.verify(token, process.env.JWT_REFRESH_KEY);
			return verifyToken;
		} catch (e) {
			return null;
		}
	}

	async findToken(refreshToken) {
		const foundToken = await tokenData.findOne({
			where: {
				refreshToken: refreshToken,
			},
		});
		return foundToken;
	}
}

module.exports = new TokenService();
