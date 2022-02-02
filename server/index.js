require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const model = require("./models/models")
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const router = require("./routers/index")
const app = express();

app.use(cors())
app.use(express.json())
app.use("/api", router)
// app.get('/', (req, res) => {
//   res.status(200).json({massage: "ok"})
// })


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