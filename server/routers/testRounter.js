const Router = require('express')
const {test, type, filterCategory, filterItem, filterTagForSearch, product, brand_mainTypeProduct_subTypeProduct,
  mainTypeProductPicture, mainTypeProduct
} = require("../models/models");
const { Op } = require("sequelize");
const router = new Router()


router.post("/",async (req, res) => {

  const brand = await mainTypeProductPicture.create({brandIDBrandID: 1, mainTypeProductIDMainTypeProductID: 1, subTypeProductIDSubTypeProductID: 1})
  res.json(brand)
})


router.get("/", async (req, res) => {
  const brands = await mainTypeProduct.findOne({

  })
  return res.json(brands)
})


module.exports = router