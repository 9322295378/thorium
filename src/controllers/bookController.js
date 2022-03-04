const { count } = require("console")
const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
  


    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const updateBooks = async function (req, res) {
    
 let id =await publisherModel.find({name:{ $in :["HarperCollins", "Penguin"] } }).select({_id:1})
 let arr = []
 arr = id.map(x=>x.id)
 let data = await bookModel.updateMany({publisher:{$in:arr}}, {$set:{"isHardCover":true}}, {new:true})
res.send(data)

}

const priceByRatings = async function(req, res){
// let highRatedAuthors = await authorModel.find({ rating: { $gt: 3.5 } });
//   let authorIds = highRatedAuthors.map((a) => a._id);

//   let data1 = await bookModel.updateMany(
//     { author: { $in: authorIds } },
//     { $inc: { price: 10 } }
//   );
//   res.send(data1)
//   }
    let price = await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
let arr = []
arr=price.map(x=>x._id)
let data2 = await bookModel.updateMany({author:{$in:arr}},
    {$inc:{price:+10}},
    {new:true})
    res.send(data2)

}


// const updateBooks = async function (req, res) {
// let hardCoverPublishers = await publisherModel.find({
//     name: { $in: ["Penguin", "HarperCollins"] },
//   });
//   let publisherIds = hardCoverPublishers.map((p) => p._id);
//    //publisherIds is an array of publisher _id values
// let data = await bookModel.updateMany(
//     { publisher: { $in: publisherIds } },
//     { isHardCover: true }
//   )
// res.send(data)
//   }

 //let id =await publisherModel.find({name:{$in["HarperCollins", ""]}})
// const updatePublished = async function(req, res){

// const update = await bookModel.updateMany({$or:[{"publisher":"62207630472f543e26282741"}, {publisher:"622076a0472f543e26282747"}]},{"isHardCover": false}, {new:true})
// // let c = 'Penguin'
// // console.log(c)
// //    publish = await bookModel.update(find({publisher: $}, {$set:{isHardCover: true}},
// //     let _id = new mongoose.Object 
//         res.send({data: update})
//     }
// const priceByRatings = async function(req, res){
//     const updatePrice = await bookModel.updateMany({ratings:{$gt:3.5}},{"price": 100},{new:true})
//     res.send(updatePrice)
// }




const update = async function (req, res) {
    // 5. a)
    let hardCoverPublishers = await publisherModel.find({
      name: { $in: ["Penguin", "HarperCollins"] },
    });
    let publisherIds = hardCoverPublishers.map((p) => p._id); //publisherIds is an array of publisher _id values
  
    await bookModel.updateMany(
      { publisher: { $in: publisherIds } },
      { isHardCover: true }
    );
  
    // 5. b)
    let highRatedAuthors = await authorModel.find({ rating: { $gt: 3.5 } });
    let authorIds = highRatedAuthors.map((a) => a._id);
  
    await bookModel.updateMany(
      { author: { $in: authorIds } },
      { $inc: { price: 10 } }
    );
  
    let updatedBooks = await bookModel.find();
    res.send({ updatedBookCollection: updatedBooks });
  };
module.exports.priceByRatings= priceByRatings
module.exports.updateBooks= updateBooks
module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.update= update






// const { count } = require("console")
// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
