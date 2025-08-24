const mongoose =  require('mongoose')

module.exports = mongoose.model('Book',{
    id: {type : String },
    title : {type : String , required: true},
    author: {type : String , required: true},
    pages:{type : Number},
    year: {type : String},
    language: {type : String},
    status: { type: String, enum: ["lu", "pas lu"], default: "pas lu" }


},'books')