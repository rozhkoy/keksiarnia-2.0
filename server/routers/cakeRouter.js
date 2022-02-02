const Router = require('express')
const router = new Router()

router.post("/",(req, res) => {
  res.status(200).json({massage: "oksd"})
})
router.get("/",(req, res) => {
  res.status(200).json({massage: "ok"})
})


module.exports = router