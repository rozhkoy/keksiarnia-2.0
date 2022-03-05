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
		const foundToken = await tokenData.findOne( {
			 where: {
				 user_id: userID
			 }
		})
		console.log("found", foundToken)
		if (foundToken) {
			console.log("sdfsdfsdfsdfsdfgdfsdfdfdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdf", foundToken)
			const rewriteToken =  await tokenData.update({refreshToken}, {
				where: {
					user_id: userID
				}
			})
			return rewriteToken
		}
		const token = await tokenData.create({
			user_id: userID,
			refreshToken: refreshToken
		})
		console.log("token",token)


		return token
	}

	async removeToken(refreshToken) {
		console.log(refreshToken)
		const remoteToken = await tokenData.destroy({where: {
				refreshToken: refreshToken
			}})
		return remoteToken
	}
}

module.exports =  new TokenService()