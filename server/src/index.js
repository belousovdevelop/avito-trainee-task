const app = require("./app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT || 8000

const startAdvertsApp = async () => {
  try {
    await mongoose.connect(
      process.env.DB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      () => console.log("DB connection successful")
    )
    app.listen(port, () => console.log(`App running on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

startAdvertsApp()
