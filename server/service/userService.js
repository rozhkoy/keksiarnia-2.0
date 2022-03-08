const {userData,  tokenData} = require('../models/models')
const bcrypt = require('bcrypt')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/apiErrors')


class UserService {

	async registration(email, password, firstName, lastName, role) {
		const candidate = await userData.findOne( {
			where:  {
				email: email
			}
		})
		if (candidate) {
			throw ApiError.BadRequest("use to be")
		}
		const hashPassword = await bcrypt.hash(password, 3)
		const user = await userData.create({email, password: hashPassword, firstName, lastName, role})
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

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.BadRequest("token not found")
		}
		const verifyToken = tokenService.validateRefreshToken(refreshToken)
		const tokenFromBD = await tokenService.findToken(refreshToken)
		if (!verifyToken || !tokenFromBD) {
			throw ApiError.UnauthorizedError()
		}
		const user = await userData.findOne({
			where: {
				id_user: verifyToken.id
			}
		})
		const userDto = new UserDto(user)
		const tokens = tokenService.generateToken({...userDto})
		const test = await tokenService.saveToken( userDto.id, tokens.refreshToken)
		return {...tokens, user: userDto}
	}

	async gerAllUsers() {
		const users = await userData.findAll({
			attributes: ['email', 'password']
		})

		return users
	}

}

module.exports =  new UserService()