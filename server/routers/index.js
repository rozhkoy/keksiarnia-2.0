const Router = require('express')
const router = new Router()
const test = require("./testRounter")
const brand = require("./brandRouter")
const mainTypeProduct = require("./mainTypeProductRouter")
const subTypeProduct = require("./subTypeProductRouter")


router.use("/test", test)
router.use("/brand", brand)
router.use("/mainTypeProduct", mainTypeProduct)
router.use("/subTypeProduct", subTypeProduct)

module.exports = router