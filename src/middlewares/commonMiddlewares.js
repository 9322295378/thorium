
const jwt = require("jsonwebtoken");

const MD1 = function(req,res,next){
 let token=req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

if (!token) return res.send({ status: false, msg: "token must be present" });

console.log(token);

let decodedToken = jwt.verify(token, "functionup-thorium");
if (!decodedToken)
  return res.send({ status: false, msg: "token is invalid" });
  next()
}



const MD2 = function(req, res, next) {
    // comapre the logged in user's id and the id in request
  
      let token = req.headers["x-auth-token"]
        if(!token) 
        return res.send({status: false, msg: "token must be present in the request header"})
        let decodedToken = jwt.verify(token, 'functionup-thorium')
    
        if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
        let userToBeModified = req.params.userId
        //userId for the logged-in user
        let userLoggedIn = decodedToken.userId
    
        //userId comparision to check if the logged-in user is requesting for their own data
        if(userToBeModified != userLoggedIn) 
        return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    
       

  
 
   
  
    next()
}

module.exports.MD1=MD1;
module.exports.MD2 =MD2






// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
