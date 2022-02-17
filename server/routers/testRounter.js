const Router = require('express')
const {test, type, filterCategory, filterItem, filterTagForSearch, product, brand_mainTypeProduct_subTypeProduct} = require("../models/models");
const { Op } = require("sequelize");
const router = new Router()


router.post("/",async (req, res) => {
  const {id1, id2, id3} = req.query
  const brand = await brand_mainTypeProduct_subTypeProduct.create({brandIDBrandID: 1, mainTypeProductIDMainTypeProductID: 1, subTypeProductIDSubTypeProductID: 1})
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