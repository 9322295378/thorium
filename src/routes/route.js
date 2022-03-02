const express = require('express');

const router = express.Router();
const BooksModel = require('../models/BooksModel')
const BooksController= require('../controller/BooksController')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/createBooks', BooksController.createBooks );
router.get('/getAllBooks', BooksController.getBooksData)
router.get('/book-author-name', BooksController.bookList)
router.post('/year-books', BooksController.getBooksInYear)
router.post('/get-Particular', BooksController.getParticularBooks)
router.get('/get-inr', BooksController.getXINRBooks)
router.get('/get-random', BooksController.getRandomBooks)
module.exports = router;



// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// module.exports = router;
