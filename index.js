const express = require('express')
const app = express()

app.use(express.json());

let books = [
    {
        ISBN: 9781365076350,
        Title: 'Rich Dad Poor Dad',
        Author: 'Robert T. Kiyosaki',
    },
    {
        ISBN: 9781854242990,
        Title: 'Personality Plus',
        Author: 'Florence Littauer',
    }
];

app.get('/', (req, res) => {
    res.send('Amins Books');
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:ISBN', (req, res) => {
    const book = books.find(b => b.ISBN === parseInt(req.params.ISBN));
    if (!book) res.status(404).send('The book with the given ISBN was not found');
    res.send(book);
});

// If the port env. var. is not undefined then parse as int and use that as the port otherwise default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));