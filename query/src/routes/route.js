const express = require('express');
const router = express.Router();



let persons = [
    {
        name: "Pratik",
        age: 10,
        votingStatus: false
    },
    {
        name: "Sanskar",
        age: 20,
        votingStatus: false
    },
    {
        name: "Arti",
        age: 70,
        votingStatus: false
    },
   
    {
        name: "komal",
        age: 5,
        votingStatus: false
    },
    {
        name: "HOney",
        age: 40,
        votingStatus: false
    }
]

router.post("/election", function (req, res) {
    let votingAge = req.query.votingAge

    let array=[];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age > votingAge) {
        
            persons[i].votingStatus == true
            array.push(persons[i])
        }
    }
if (array.length>0)
{
    return res.send(array)
}
else{
    return res.send("no member found above this age")
}

})

module.exports = router;