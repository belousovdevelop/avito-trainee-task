const express = require("express")
const AdsCtrl = require("../controllers/adverts")

const router = express.Router()
const AdvertsController = new AdsCtrl()

router.get("/ads", AdvertsController.allAdverts)
router.get("/ads/:id", AdvertsController.specificAdvert)
router.post("/ads", AdvertsController.addAdvert)

module.exports = router
