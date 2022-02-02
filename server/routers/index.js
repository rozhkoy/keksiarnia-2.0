const Router = require('express')
const router = new Router()
const catalogRouter = require("./catalogRouter")
const cakeRouter = require("./cakeRouter")
const cupcakeRouter = require("./cupcakeRouter")

router.use("/catalog", catalogRouter)
router.use("/cake", cakeRouter)
router.use("/cupcake", cupcakeRouter)


module.exports = router