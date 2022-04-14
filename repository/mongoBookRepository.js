// import { logger } from '../../helpers/logger';
import Book from 'db/BookSchema.js';
// import { IFlagRepository } from '../../models/interfaces/IFlagRepository';
// import { FeatureFlag, FeatureFlagResponse } from '../../models/flag/FeatureFlag';

class MongoBookRepository {

    findAll() {
        console.log('In BookRepository.findAll()');
        return Book.find({});
    }

    updateOne(title, book) {
        console.log('In bookRepository.updateOne()');
        return Book.findOneAndUpdate({ 'title': title },
            {
                title: book.title,
                author: book.author,
                isbn: book.isbn
            }, { new: true }).orFail();
    }

    addBook(book) {
        console.log('In bookRepository.addBook()');

        return new Promise((resolve, reject) => {
            const bookToAdd = new Book(book);

            console.log('Adding book to DB');
            bookToAdd.save().then((result) => resolve(result)).catch((error) => reject(error));
        });
    }

    deleteOne(name) {
        console.log('In bookRepository.deleteOne()');
        return Book.findOneAndDelete({ 'name': name }).orFail();
    }

    count() {
        console.log('In bookRepository.count()');
        return Book.countDocuments({});
    }

    insertBook(book) {
        console.log('In bookRepository.insertBook()');
        return Book.insertMany(book);
    }
}

const mongoBookRepository = new MongoBookRepository();
Object.freeze(mongoBookRepository);

export default mongoBookRepository;
