require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const model = require("./models/models")
const cors = require('cors')
const cookieParse = require('cookie-parser')
const PORT = process.env.PORT || 5000;
const fileUpload = require('express-fileupload')
const router = require("./routers/index")
const app = express();
const path = require("path");
const errorMiddleware = require('./middleware/errorMiddlleware');


app.use(express.json())
app.use(cookieParse())
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}))
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router)
app.use(errorMiddleware)

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