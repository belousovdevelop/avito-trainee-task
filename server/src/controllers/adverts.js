const Ad = require("../models/advert")

class AdsCtrl {
  async allAdverts(req, res) {
    const { query } = req

    const sort = {}
    if (query.sortBy && query.orderBy) {
      sort[query.sortBy] = query.orderBy
    } else {
      sort.createdAt = "desc" //  default sort
    }

    const page = query.page ? parseInt(query.page) : 1
    const limit = 6 //  adverts per page
    const skip = limit * (page - 1)

    const conditions = {}
    const projection = {
      images: { $slice: 1 }, //  take only first image
      versionKey: false // disable version key
    }
    const options = { sort, limit, skip }

    try {
      const ads = await Ad.find(conditions, projection, options)
      const count = await Ad.countDocuments()
      res.status(200).json({
        status: "success",
        results: count,
        data: ads
      })
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err
      })
    }
  }
  async specificAdvert(req, res) {
    const { query } = req

    let fields = {}
    if (query.fields) {
      //  each field to true
      fields = query.fields.split(",").reduce((acc, v) => {
        acc[v] = true
        return acc
      }, {})
    }
    const projection = {
      title: true,
      price: true,
      sellerName: true,
      ...fields
    }
    try {
      const ad = await Ad.find({ _id: req.params.id }, projection)
      res.status(200).json({ status: "success", data: ad })
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err
      })
    }
  }
  async addAdvert(req, res) {
    try {
      const ads = await Ad.find()
      res.status(200).json({
        status: "success",
        data: ads
      })
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err
      })
    }
  }
}

module.exports = AdsCtrl
