const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController= require("../controllers/userController")
const middle =require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middle.tokenCheck, userController.getUserData)

router.put("/users/:userId",middle.tokenCheck, userController.updateUser)
router.delete("/users/:userId",middle.tokenCheck, userController.DeletUser)

module.exports = router;