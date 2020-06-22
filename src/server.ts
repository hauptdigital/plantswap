import dotenv = require('dotenv');
dotenv.config();
import express = require('express');
import * as database from './lib/database/database';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

database.initDatabase(process.env.DB_URL, process.env.DB_NAME).then(async () => {
    console.log(`Database ${process.env.DB_NAME} is ready`);

    app.listen(process.env.PORT, () =>
        console.log(`Express server app listening at http://localhost:${process.env.PORT}`),
    );
});
