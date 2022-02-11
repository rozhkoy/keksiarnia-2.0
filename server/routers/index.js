const Router = require('express')
const router = new Router()
const catalogRouter = require("./catalogRouter")
const filteredProducts = require("./filteredProducts")
const filter = require("./filterRouter")
const test = require("./testRounter")
const product = require("./product")

router.use("/catalog", catalogRouter)
router.use("/filtered", filteredProducts)
router.use("/filter", filter)
router.use("/test", test)
router.use("/product", product)

module.exports = router