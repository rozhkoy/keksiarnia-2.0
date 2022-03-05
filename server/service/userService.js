const {userData,  tokenData} = require('../models/models')
const bcrypt = require('bcrypt')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/apiErrors')

class UserService {

	async registration(email, password) {
		const candidate = await userData.findOne( {
			where:  {
				email: email
			}
		})
		if (candidate) {
			throw ApiError.BadRequest("use to be")
		}
		console.log(email, password)
		const hashPassword = await bcrypt.hash(password, 3)
		const user = await userData.create({email, password: hashPassword})
		const userDto = new UserDto(user)
		const tokens = tokenService.generateToken({...userDto})
		const test = await tokenService.saveToken( userDto.id, tokens.refreshToken)
		return {...tokens, user: userDto}
	}

	async login(email, password) {
		const user = await userData.findOne({
			where: {
				email: email
			}
		})
		if (!user) {
			throw ApiError.BadRequest('user not found')
		}
		console.log("sdfsdfffffffffffffffffffffffffffffffffffffff", user, password)
		const isPassEquals = await bcrypt.compare(password, user.password);
		if (!isPassEquals) {
			throw ApiError.BadRequest('incorrect password')
		}
		const userDto = new UserDto(user)
		const tokens = tokenService.generateToken({...userDto})
		const test = await tokenService.saveToken( userDto.id, tokens.refreshToken)
		return {...tokens, user: userDto}
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken);
		return token
	}
}

module.exports =  new UserService()