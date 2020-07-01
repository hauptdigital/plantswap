const { Router } = require('express');
const { getUser, registerUser, checkUserCredentials, getUserNameByLoginCredentials } = require('../models/users');
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
            const userName = await getUserNameByLoginCredentials(request.body.userNameOrEmail);
            const payload = { data: userName };
            const token = jsonwebtoken.sign(payload, process.env.SECRET, {
                expiresIn: 2628000, // 1 month
            });
            response.cookie('token', token, { expires: new Date(Date.now() + 2628000), httpOnly: true }).json(userName);
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

router.get('/:userName', async (request, response) => {
    try {
        const userName = request.params.userName;
        const user = await getUser(userName);
        return response.json(user);
    } catch (error) {
        console.error(error);
        return response.status(404).end('Error');
    }
});

module.exports = router;
