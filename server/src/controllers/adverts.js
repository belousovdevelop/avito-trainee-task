const Ad = require("../models/advert")

class AdsCtrl {
  async allAdverts(req, res) {
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
  async specificAdvert(req, res) {
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
