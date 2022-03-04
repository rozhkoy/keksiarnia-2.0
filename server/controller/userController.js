const userService =  require('../service/userService')

class UserController  {

	async registration(req, res, next) {
		try {
			const {email, password} = req.body;
			const userReg = await userService.registration(email, password)
			res.cookie('refreshToken', userReg.refreshToken, {maxAge: 30000000, httpOnly: true })
			return res.json(userReg)
		}
		catch (e) {
			console.log(e)
		}
	}
}

module.exports = new UserController()