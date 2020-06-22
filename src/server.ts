import dotenv = require('dotenv');
dotenv.config();
import express = require('express');
import * as database from './lib/database/database';

const databaseURL = process.env.DB_URL || 'mongodb://localhost:27017';
const databaseName = process.env.DB_NAME || 'custom';
const databasePort = process.env.PORT || 8080;

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

database.initDatabase(databaseURL, databaseName).then(async () => {
    console.log(`Database ${databaseName} is ready`);

    app.listen(databasePort, () => console.log(`Express server app listening at http://localhost:${databasePort}`));
});
