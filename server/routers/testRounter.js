const Router = require('express')
const {test, type, filterCategory, filterItem, filterTagForSearch, product} = require("../models/models");
const { Op } = require("sequelize");
const router = new Router()


router.post("/",async (req, res) => {
  const {field, productID} = req.query
  const brand = await filterTagForSearch.create({field: field, productID: productID})
  res.json(brand)
})


router.get("/", async (req, res) => {
  const brands = await filterTagForSearch.findAll({
    where: {field: "Сhocolate"},
    include: {
      model: product
    }
  })
  return res.json(brands)
})


module.exports = router