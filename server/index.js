require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const model = require("./models/models")
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const fileUpload = require('express-fileupload')
const router = require("./routers/index")
const app = express();
const path = require("path");

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router)



const start = async () => {
  try{
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

  } catch (e) {
    console.log(e)
  }
}

start()