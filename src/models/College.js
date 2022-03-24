const mongoose = require('mongoose');

const college = new mongoose.Schema( {
    name: {
         required:true,
         unique:true,
         type:String,
         lowercase: true,
         trim:true
},
    fullName: {
        required:true,
        type:String,
        trim:true
},
    logoLink: {
            type:String,
            required:true,
            trim:true
        },
    isDeleted:{
            type:Boolean,
            default:false
        }

}, { timestamps: true });   
   
module.exports = mongoose.model('collegeModel', college) 