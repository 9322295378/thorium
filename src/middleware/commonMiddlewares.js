const router = require("../routes/route")
const moment = require('moment');

const middleware = function(req, res, next){
    
let now = moment();
console.log(now.format());
let ip = req.socket.remoteAddress

console.log(ip)
//var info = url.parse(src/routes/route);
console.log(req.originalUrl)


next()

}



module.exports.middleware= middleware;