const express = require('express');
const res = require('express/lib/response');
const router = express.Router();


let player = []

router.post('/players', function(req,res){

let player = req.body;
let playerName = player.name;
for(let i = 0; i<players.length; i++){
    if(player[i].name==playerName){
        res.send('player already exist')
    }
}
players.push(player);
res.send(players);

})



router.post('/players-id/:playerName/bookings/:bookingId', function(req,res){
    let name = req.params.playerName
    let isPlayerPresent =false
    for (let i=0; i<players.length;i++){
        if(players[i].name==name){
            isPlayerPresent = true
        }
    }
    let booking = req.body
 booking = req.params.bookingId
    for(let i = 0; i<players.length; i++){
               if(players[i].name == name){
              for(let j= 0;j<playerd[i].bookings.length;j++){
                   if(players[i].booking[j].bookingNumber==bookingId){
                       return res.send("booking Already exsits")
                   }
              }
              players[i].bookings.push(booking)
            }
        }
        res.send(players)
})





















// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

// WRITE A POST API TO THE ABOVE


// take this as sample for array of persons:
// let persons= [
//    {
//    name: "PK",
//    age: 10,
//    votingStatus: false
// },
// {
//    name: "SK",
//    age: 20,
//    votingStatus: false
// },
// {
//    name: "AA",
//    age: 70,
//    votingStatus: false
// },
// {
//    name: "SC",
//    age: 5,
//    votingStatus: false
// },
// {
//    name: "HO",
//    age: 40,
//    votingStatus: false
// }
// ]


module.exports = router;