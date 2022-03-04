const {userData,  tokenData} = require('../models/models')
const bcrypt = require('bcrypt')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/user-dto')

class UserService {

	async registration(email, password) {
		const candidate = await userData.findOne( {
			where:  {
				email: email
			}
		})
		if (candidate) {
			throw new Error("user to be")
		}
		const hashPassword = await bcrypt.hash(password, 3)
		const user = await userData.create({email, password: hashPassword})
		const userDto = new UserDto(user)
		const tokens = tokenService.generateToken({...userDto})
		const writeRefreshToken = tokenData.create({ user_id: userDto.id, refreshToken: tokens.refreshToken })

		return {...tokens, user: userDto}
	}
}

module.exports =  new UserService()