require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const model = require("./models/models")
const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
  try{
    await sequelize.authenticate()
      .then(() => console.log("yes"))
    await sequelize.sync().then(
      () => console.log("create")
    )
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

  } catch (e) {
    console.log(e)
  }
}

start()