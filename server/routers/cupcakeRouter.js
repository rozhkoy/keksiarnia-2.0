const Router = require('express')
const {test} = require("../models/models");
const router = new Router()

router.post("/",async (req, res) => {
  const field = req.query.name
  const brand = await test.create({field: field})
  res.json(brand)

})
router.get("/", async (req, res) => {
  const brands = await test.findAll()
  return res.json(brands)
})


module.exports = router