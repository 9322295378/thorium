const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memsController= require("../controllers/mems")
const wetherController= require("../controllers/wetherController")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date


router.get("/weather",wetherController.weatherCheck )
router.get("/District", CowinController.getDistrict3)
router.post("/mems1",memsController.mems)
router.post("/mems2",memsController.getMemes)
router.post("/mems3",memsController.createMemes)
router.get("/sortTempCity", wetherController.tepOfCity)
module.exports = router;