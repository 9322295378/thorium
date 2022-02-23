const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
     //1
router.get('/movies',function(req,res){
    mov = ["dilwale", "bagigar", "kyu", "dark", "babali aur banti"]
});
//2
router.get('/movies/:movieId', function(req, res){
    mov = ["dilwale", "bagigar", "kyu", "dark", "babali aur banti"]
    let value = req.params.movieId;
    if(value>mov.length-1){
        res.send('"not exit"')

    }
    else{
        res.send(mov[value])
    }
});



//3
router.get('/films/:filmId', function(req,res){
res.send([{ id: 1, name: "3 idots"}, 
{ id:2, name: "dilwale"}, {id:3, name: "diwane"}, {id:4, name:"fitoor"}, {id:5, name: "afrin"}, {id:6, name:"student of the year"}])

 
})
router.get('/film/:filmId', function(req, res){
    let movi = [{ id: 1, name: "3 idots"}, 
    { id:2, name: "dilwale"}, {id:3, name: "diwane"}, {id:4, name:"fitoor"}, {id:5, name: "afrin"}, {id:6, name:"student of the year"}]
    

let value = req.params.filmId;
let found = false;
for(let i = 0;i <movi.length;i++){
if(movi[i].id==value){
    found = true;
    res.send(movi[i])
   break;
}
}
})
// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })




module.exports = router