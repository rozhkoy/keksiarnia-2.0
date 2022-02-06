const Router = require('express')
const router = new Router()
const catalogRouter = require("./catalogRouter")
const cakeRouter = require("./cakeRouter")
const cupcakeRouter = require("./cupcakeRouter")
const test = require("./testRounter")
const product = require("./product")

router.use("/catalog", catalogRouter)
router.use("/cake", cakeRouter)
router.use("/cupcake", cupcakeRouter)
router.use("/test", test)
router.use("/product", product)


module.exports = router