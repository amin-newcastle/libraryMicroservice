const express = require('express');
const app = express();
const schema = require('/Users/muhammad.karim/Documents/Training/Angular/libraryMicroservice/Validations/schema.js');
app.use(express.json());

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

app.get('/', (req, res) => {
    res.send('Amins Library');
});

app.get('/api/library', (req, res) => {
    res.send(library);
});

app.get('/api/library/:ISBN', (req, res) => {
    const book = library.find(b => b.ISBN === parseInt(req.params.ISBN));
    if (!book) res.status(404).send('The book with the given ISBN was not found');
    res.send(book);
});

app.post('/api/library', (req, res) => {
    try {
        // Validate book
        const response = schema.validate(req.body);
        if (response.error) {
            res.status(400).send(response.error.details[0].message);
            return;
        }

        // Send book object to library array
        const book = {
            ISBN: req.body.ISBN,
            title: req.body.Title,
            author: req.body.Author
        }
        library.push(book);
        res.send(book);
    } catch (e) {
        res.send(e);
    }
});

// If the port env. var. is not undefined then parse as int and use that as the port otherwise default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));