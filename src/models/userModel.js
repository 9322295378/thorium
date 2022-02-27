const mongoose = require('mongoose');

const userBook = new mongoose.Schema( {
    BookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName : {
        type: String,
    
        required: true
    },
    BookCategory : {
        type: String,
        unique: true,
    },
    year: Number,
    BookList:[String],
        
 }, { timestamps: true });

//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userBook) //users



// // String, Number
// // Boolean, Object/json, array