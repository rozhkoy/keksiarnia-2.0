const Router = require('express')
const router = new Router()
const test = require("./testRounter")
const userController = require('../controller/userController')
const {body} = require('express-validator')
const isActiveRouter = require('../routers/isActiveRouter')
const checkRole = require('../middleware/checkRoleMiddlleware')
const mainTypeRouter = require('../routers/mainTypeRouter')
const mainTypePicturesRouter = require('../routers/mainTypePicturesRouter')

router.use("/test", test)

router.post("/registration",
	body('email').isEmail(),
	body('password').isLength({min: 3, max: 32}),
	userController.registration)
router.post("/login", userController.login)
router.get("/logout", userController.logout)
router.get("/refresh", userController.refresh)
router.get("/users", checkRole, userController.gerUsers)
router.use("/isActive", isActiveRouter)
router.use('/mainType', mainTypeRouter)
router.use('/mainTypePictures', mainTypePicturesRouter)

module.exports = router