const Router = require('express')
const router = new Router()

router.post("/",(req, res) => {
  res.status(200).json({massage: "dfsdfa"})
})
router.get("/", (req, res) => {
  res.status(200).json({massage: "catalog"})
})


module.exports = router