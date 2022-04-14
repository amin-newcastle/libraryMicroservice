const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        isbn: { type: Number, required: true },
        synopsis: { type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('books', Book)