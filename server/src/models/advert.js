const mongoose = require("mongoose")

const adSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "An ad must have a title"],
      unique: true,
      maxlength: [200, "An ad title must have less or equal then 200 characters"]
    },
    description: {
      type: String,
      required: [true, "An ad must have a description"],
      trim: true,
      maxlength: [1000, "An ad description must have less or equal then 1000 characters"]
    },
    address: {
      type: String,
      required: [true, "An ad must have a address"],
      maxlength: [200, "An ad address must have less or equal then 200 characters"]
    },
    price: {
      type: Number,
      required: [true, "An ad must have a price"]
    },
    images: {
      type: Array,
      default: "https://kare.ee/images/no-image.jpg"
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
