// import setup_db from './db/setup_db.js'
import express from 'express'
import {libraryRouter} from './routes/library.js'
const app = express();

// const schema = require('/Users/muhammad.karim/Documents/Training/Angular/libraryMicroservice/Validations/schema.js');

app.use('/', libraryRouter);
app.use('/api/library', libraryRouter);

//setup_db(app);
export { app };