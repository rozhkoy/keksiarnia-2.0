const Router = require('express')
const { filterTagForSearch, product } = require("../models/models");
const router = new Router()

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