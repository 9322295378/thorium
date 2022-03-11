const express = require('express');
const router = express.Router();
const userController= require("../controllers/myController")
const Middleware = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

 router.post("/login", userController.loginUser)

// //The userId is sent by front end
router.get("/users/:userId", Middleware.MD1, Middleware.MD2, userController.getUserData)
router.post("/users/:userId/posts",Middleware.MD1, Middleware.MD2, userController.postMessage)
router.put("/users/:userId",Middleware.MD1, Middleware.MD2, userController.updateUser)
router.delete('/users/:userId', userController.deleteUser)
router.delete("/users/:userId",Middleware.MD1, Middleware.MD2, userController.deleteUser)

module.exports = router;






// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// const myController= require("../controllers/myController")
// //const BookController= require("../controllers/bookController")
// const commonMW = require ("../middlewares/commonMiddlewares")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })



// const express = require('express');
// const router = express.Router();
// const userController= require("../controllers/userController")
// const Middleware = require("../middleware/auth.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId",Middleware.MD1, Middleware.MD2, userController.getUserData)
// router.post("/users/:userId/posts",Middleware.MD1, Middleware.MD2, userController.postMessage)
// router.put("/users/:userId",Middleware.MD1, Middleware.MD2, userController.updateUser)
// //router.delete('/users/:userId', userController.deleteUser)
// router.delete("/users/:userId",Middleware.MD1, Middleware.MD2, userController.deleteUser)

// module.exports = router;






// // router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// // router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// // router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




// module.exports = router;