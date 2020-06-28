const { Router } = require('express');
const { registerUser, checkUserCredentials } = require('../models/users');
const jsonwebtoken = require('jsonwebtoken');

const router = Router();

router.post('/register', async (request, response) => {
    try {
        const id = await registerUser(request.body);
        return response.json(id);
    } catch (error) {
        console.error(error);
        response.status(400).end(error._message);
    }
});

router.post('/login', async (request, response) => {
    try {
        const loginCredentialsAreCorrect = await checkUserCredentials(request.body);
        if (loginCredentialsAreCorrect) {
            const payload = { data: request.body.userNameOrEmail };
            const token = jsonwebtoken.sign(payload, process.env.SECRET, {
                expiresIn: 2628000, // 1 month
            });
            response.cookie('token', token, { expires: new Date(Date.now() + 2628000), httpOnly: true }).json(token);
        }
        response.json(false);
    } catch (error) {
        console.error(error);
        response.status(400).end(error.message);
    }
});

router.post('/logout', async (request, response) => {
    try {
        response.clearCookie('token');
        response.send('token cleared');
    } catch (error) {
        console.error(error);
        response.status(400).end(error.message);
    }
});

module.exports = router;
