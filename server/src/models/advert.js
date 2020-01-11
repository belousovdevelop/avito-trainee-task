const mongoose = require("mongoose")

const adSchema = mongoose.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    address: {
      type: String
    },
    price: {
      type: Number
    },
    images: {
      type: Array
    },
    sellerName: {
      type: String,
      default: "Инкогнито"
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { versionKey: false } // disable version key
)

module.exports = mongoose.model("Ad", adSchema)
