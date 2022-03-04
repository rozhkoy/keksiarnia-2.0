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


router.use("/test", test)
router.use("/brand", brand)
router.use("/mainTypeProduct", mainTypeProduct)
router.use("/subTypeProduct", subTypeProduct)
router.use("/isActive", isActive)
router.use("/mainTypePictures", mainTypePictures)
router.use("/mainTypeProductById", mainTypeProductById)
// router.post("/reg", userController.registration)

module.exports = router