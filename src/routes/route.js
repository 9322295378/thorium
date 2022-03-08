const express = require('express');
const router = express.Router();

const UserController= require('../controllers/userController')
const ProductController= require('../controllers/productController')
const HeaderMiddleware = require('../middleware/headerMiddleware')
const OrderController = require('../controllers/orderController.js')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser", HeaderMiddleware.freeAppUser, UserController.createUser )
router.post("/createProduct", ProductController.createProduct  )
router.post("/createOrder", OrderController.createOrder )




module.exports = router;