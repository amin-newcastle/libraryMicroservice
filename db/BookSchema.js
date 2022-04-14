import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * Declare the schema for a Book object
 */
const book = new Schema({
    title: {
        type: String, required: true,
    },
    author: {
        type: String, required: true,
    },
    isbn: {
        type: Number, required: true,
    }
});

const BookSchema = mongoose.model('Book', book);

export default BookSchema;
