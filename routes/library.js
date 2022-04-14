import express from 'express'
// import {app} from "../app.js";
const libraryRouter = express.Router();

let library = [
    {
        ISBN: 9781365076350,
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
    },
    {
        ISBN: 9781854242990,
        title: 'Personality Plus',
        author: 'Florence Littauer',
    }
];

libraryRouter.get('/', (req, res) => {
    res.send('Amins Library');
});

libraryRouter.get('/api/library', (req, res) => {
    res.send(library);
});

libraryRouter.get('/api/library/:ISBN', (req, res) => {
    const book = library.find(b => b.ISBN === parseInt(req.params.ISBN));
    if (!book) res.status(404).send('The book with the given ISBN was not found');
    res.send(book);
});

libraryRouter.post('/api/library', (req, res) => {
    try {
        // Validate book
        // const response = schema.validate(req.body);
        // if (response.error) {
        //     res.status(400).send(response.error.details[0].message);
        //     return;
        // }

        const book = {
            ISBN: req.body.ISBN,
            title: req.body.title,
            author: req.body.author
        }
        book.save().then(() => {
            return res.status(201).json({
                success: true,
                id: this.ISBN,
                message: 'Book created'
            });
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: 'Book not created!',
        });
    }
});




export {libraryRouter};