let axios = require("axios")
let weatherCheck = async function(req,res){
    try {
        let q = req.query.q
        let appid = req.query.appid
        if(q&&appid){
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `HTTPS://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
         }
        let result = await axios(options)
        console.log(result.temp)
        res.status(200).send({ msg: result.data })}
        else
        res.status(400).send({status:false, msg:"is not valid city"})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
     }

//////////////////////////Temp sort///////////////

let tepOfCity = async function(req, res)
     {
           try{

   let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
   let key = req.query.appid
   if(key){
       let temp = []
       let temp1 = []
       for (let i = 0; i<cities.length;i++){
           let options= {
               method: "GET",
               url:`http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${key}`
           }
           let result = await axios (options)
           let temp123 = result.data.main.temp
           temp.push([cities[i], temp123])
           temp1.push(temp123)
       }

       let sortAccordingToTemp = temp.sort((a,b)=>(a[1]-b[1]))

       let arr = []
       for(let j=0;j<sortAccordingToTemp.length;j++){
       const element = sortAccordingToTemp[j]
       let obj ={}
       obj["city"] = element[0]
       obj["temp"]= element[1]
       arr.push(obj)
   }

res.status(200).send({status:true, msg: arr})
}else {
    res.status(400).send({status:false, msg:"plz provide valid city"})
}


}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}


     }


module.exports.tepOfCity=tepOfCity;
 module.exports.weatherCheck=weatherCheck;