const Router = require('express')
const {test, type, filterCategory, filterItem, filterTagForSearch, product, brand_mainTypeProduct_subTypeProduct,
  mainTypeProductPicture, mainTypeProduct
} = require("../models/models");
const { Op } = require("sequelize");
const router = new Router()


router.post("/",async (req, res) => {

 const response =  await mainTypeProduct.update({ title: "Dosdfsdfe" }, {
    where: {
      id_mainTypeProduct: 11
    }
  });
 res.json(response)
})


router.get("/", async (req, res) => {
  const brands = await mainTypeProduct.findAndCountAll({
      offset: 2,
      limit: 2
  })
  return res.json(brands)
})


module.exports = router