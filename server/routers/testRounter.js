const Router = require('express')
const {test, type} = require("../models/models");
const { Op } = require("sequelize");
const router = new Router()


router.post("/",async (req, res) => {
  const field = req.query.field
  const brand = await type.create({name: field})
  res.json(brand)
})


router.get("/", async (req, res) => {
  const brands = await type.findAll({
      where: [{name: "ddfsd"}]
      }
  )
  return res.json(brands)
})


module.exports = router