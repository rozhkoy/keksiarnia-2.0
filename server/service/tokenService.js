const jwt = require('jsonwebtoken')
const {userData,  tokenData} = require('../models/models')

class TokenService {
	generateToken(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: '30m'})
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: "30d"})

		return {
			refreshToken,
			accessToken
		}
	}


	async saveToken(userID, refreshToken) {
		const tokenData = await tokenData.findOne( {
			 where: {
				 user_id: userID
			 }
		})
		if (tokenData) {
			const rewriteToken =  await tokenData.update({refreshToken}, {
				where: {
					user_id: userID
				}
			})
			return rewriteToken
		}
		const token = await userData.create({
			user_id: userID,
			refreshToken
		})
		return token

	}
}

module.exports =  new TokenService()