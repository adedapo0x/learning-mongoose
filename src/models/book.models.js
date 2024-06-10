const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2
    },
    author: {
        type: String,
        required: true
    },
    genre:String,
})

module.exports = mongoose.model('Book', BookSchema)

