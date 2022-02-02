const Router = require('express')
const router = new Router()

router.post("/",(req, res) => {
  res.status(200).json({massage: "dok"})
})
router.get("/",(req, res) => {
  res.status(200).json({massage: "cup"})
})


module.exports = router