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
    
       // let user =  userModel.findById(req.params.userId)
        // if(!user)
        //  return res.send({status: false, msg: 'No such user exists'})
        
        // let updatedPosts = user.posts
        // //add the message to user's posts
        // updatedPosts.push(message)
        
    
    next()
}





module.exports.MD1=MD1;
module.exports.MD2 =MD2;
