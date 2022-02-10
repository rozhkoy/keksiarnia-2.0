const Router = require('express')
const {test, type, filterCategory, filterItem} = require("../models/models");
const { Op } = require("sequelize");
const router = new Router()


router.post("/",async (req, res) => {
  const {field, CategoryID} = req.query
  const brand = await filterItem.create({field: field, CategoryID: CategoryID})
  res.json(brand)
})


router.get("/", async (req, res) => {
  const brands = await filterCategory.findAll({
    include: [
      { model: filterItem},
      { model: type, where: {name: "Muffin"}}]

  })
  return res.json(brands)
})


module.exports = router