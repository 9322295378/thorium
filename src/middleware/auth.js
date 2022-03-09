const jwt = require("jsonwebtoken");
const Controller =require('../controllers/userController')

let tokenCheck = function(req,res,next){
 
  //let token = jwt.sign(req.body,"functionup-thorium")
       
    let token = req.headers["x-auth-token"];
  //let decodedToken = jwt.verify(token, "functionup-thorium");
  
 //if (!token1) token1 = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token not present" });
 
    next()
}


module.exports.tokenCheck=tokenCheck;