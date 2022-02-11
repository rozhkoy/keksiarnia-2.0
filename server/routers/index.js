const Router = require('express')
const router = new Router()
const catalogRouter = require("./catalogRouter")
const cakeRouter = require("./cakeRouter")
const filter = require("./filterRouter")
const test = require("./testRounter")
const product = require("./product")

router.use("/catalog", catalogRouter)
router.use("/cake", cakeRouter)
router.use("/filter", filter)
router.use("/test", test)
router.use("/product", product)

module.exports = router