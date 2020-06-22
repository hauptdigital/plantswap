import dotenv = require('dotenv');
import express = require('express');
import * as database from './lib/database/database';

const users = require('./lib/routes/users');

dotenv.config();
const databaseURL = process.env.DB_URL || 'mongodb://localhost:27017/custom';
const databasePort = process.env.PORT || 8080;

// Create a new express application instance
const app: express.Application = express();

// Parse application/json for all request
app.use(express.json());

// Setup api endpoints
app.use('/api/users', users);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

database.initDatabase(databaseURL).then(async () => {
    console.log(`Database ${databaseURL} is ready`);

    app.listen(databasePort, () => console.log(`Express server app listening at http://localhost:${databasePort}`));
});
