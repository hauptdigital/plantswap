const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const { initDatabase } = require('./src/lib/database/database');
const users = require('./src/lib/routes/users');
const authentication = require('./src/lib/routes/authentication');

dotenv.config();

// Create a new express application instance
const app = express();

// Parse application/json for all request
app.use(express.json());

// Use cookie parser for authentication purpoeses
app.use(cookieParser());

// Setup api endpoints
app.use('/api/users', users);
app.use('/api/auth', authentication);

initDatabase(process.env.DB_URL).then(async () => {
    console.log(`Database ${process.env.DB_URL} is ready`);

    app.listen(process.env.PORT, () =>
        console.log(`Express server app listening at http://localhost:${process.env.PORT}`),
    );
});
