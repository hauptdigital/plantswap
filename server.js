const dotenv = require('dotenv');
const express = require('express');
const { initDatabase } = require('./src/lib/database/database');
const users = require('./src/lib/routes/users');

dotenv.config();

// Create a new express application instance
const app = express();

// Parse application/json for all request
app.use(express.json());

// Setup api endpoints
app.use('/api/users', users);

initDatabase(process.env.DB_URL).then(async () => {
    console.log(`Database ${process.env.DB_URL} is ready`);

    app.listen(process.env.PORT, () =>
        console.log(`Express server app listening at http://localhost:${process.env.PORT}`),
    );
});
