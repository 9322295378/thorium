const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile:Number,
    emailId: String,
    password:String,
    isDeleted:{type:Boolean, default:false},
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    post:[]
}, { timestamps: true });

module.exports = mongoose.model('StatusCode', userSchema) //users



// String, Number
// Boolean, Object/json, array