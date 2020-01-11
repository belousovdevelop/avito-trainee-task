const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")

app.use(morgan("dev"))
app.use(cors())

app.use(express.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
app.use(express.json()) // parse application/json

const adsRoutes = require("./routes/adverts")
app.use("/api/v1", adsRoutes)

app.use((req, res, next) => {
  res.status(404).json({ status: "error", message: "Route is not defined" })
})

module.exports = app
