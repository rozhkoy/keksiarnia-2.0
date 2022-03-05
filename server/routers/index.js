const Router = require('express')
const router = new Router()
const test = require("./testRounter")
const brand = require("./brandRouter")
const mainTypeProduct = require("./mainTypeProductRouter")
const subTypeProduct = require("./subTypeProductRouter")
const isActive = require("./isActiveRouter")
const mainTypePictures = require("./mainTypePictures")
const mainTypeProductById = require("./mainTypeProductByIdRouter")
const userController = require('../controller/userController')
const {body} = require('express-validator')

router.use("/test", test)
router.use("/brand", brand)
router.use("/mainTypeProduct", mainTypeProduct)
router.use("/subTypeProduct", subTypeProduct)
router.use("/isActive", isActive)
router.use("/mainTypePictures", mainTypePictures)
router.use("/mainTypeProductById", mainTypeProductById)
router.post("/registration",
	body('email').isEmail(),
	body('password').isLength({min: 3, max: 32}),
	userController.registration)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
module.exports = router