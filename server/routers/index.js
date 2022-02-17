const Router = require('express')
const router = new Router()
const test = require("./testRounter")

router.use("/test", test)

module.exports = router