const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    text: String,
    author: String
})

module.exports = mongoose.model('Review',reviewSchema)