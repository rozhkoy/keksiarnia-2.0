const userService =  require('../service/userService')
const {validationResult} = require("express-validator");
const ApiError = require('../exceptions/apiErrors')

class UserController  {
	async registration(req, res, next) {
		try {
			const errors = validationResult(req)
			if(!errors.isEmpty()){
				return next(ApiError.BadRequest("incorrect password or login", errors.array()))
			}
			const {email, password} = req.body;
			console.log(email, password)
			const userReg = await userService.registration(email, password)
			res.cookie('refreshToken', userReg.refreshToken, {maxAge: 30000000, httpOnly: true})
			return res.json(userReg)
		}
		catch (e) {
			next(e)
		}
	}

	async login(req, res, next) {
		try {
			const {email, password} = req.body;
			const userLogin = await userService.login(email, password)
			res.cookie('refreshToken', userLogin.refreshToken, {maxAge: 30000000, httpOnly: true })
			return res.json(userLogin)
		} catch (e) {
			next(e)
		}
	}

	async logout (req, res, next) {
		try {
			const {refreshToken} = req.cookies
			const token = await userService.logout(refreshToken)
			res.clearCookie("refreshToken");
			return res.json(token)
		} catch (e) {
			next(e)
		}
	}

	async refresh(req, res, next) {
		try {
			const {refreshToken} = req.cookies
			const userRefresh = userService.refresh(refreshToken)
			res.cookie('refreshToken', userRefresh.refreshToken, {maxAge: 30000000, httpOnly: true })
			return res.json(userRefresh)
		} catch (e) {

		}
	}

	async gerUsers(req, res, next) {
		try {
			const users = await userService.gerAllUsers()
			return res.json(users)
		} catch (e){
			next(e)
		}
	}
}

module.exports = new UserController()