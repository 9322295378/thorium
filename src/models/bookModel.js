const mongoose = require('mongoose');
const UserModel = require("../models/bookModel")

const ObjectId = mongoose.Schema.Types.ObjectId
const BookSchema = new mongoose.Schema({
        title:
        {
                type:String,
                required:true,
                unique:true
        },
        excerpt:
         {
                 type:String, 
                 required:true
        }, 
        userId: 
        {
                type:ObjectId, 
                required:true, 
                ref:"User",
                
        },
        ISBN:
         {
                 type:String,
                 trim:true,
                  required:true,
                   unique:true
        },
        bookCover:{
 type:String
        },
          
        category:
         {
                 type:String,
                  required:true
         },
        subcategory: 
        {   
                type:String,

                 required:true
        },
        reviews:
         {
         type:Number,
         required:true,
         default:0
         },
        
        deletedAt: {
                type:Date
        }, 
        isDeleted: 
        {
                type:Boolean, 
                default: false
        },
        releasedAt: 
        {
                type:Date, 
                required:true
        },
      

},{timestamps:true})
module.exports = mongoose.model("Book", BookSchema)