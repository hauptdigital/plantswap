const { Router } = require('express');
const { registerUser, loginUser } = require('../models/users');

const router = Router();

router.post('/register', async (request, response) => {
    try {
        const id = await registerUser(request.body);
        return response.json(id);
    } catch (error) {
        console.error(error);
        response.status(400).end('Error');
    }
});

router.post('/login', async (request, response) => {
    try {
        const isLoggedIn = await loginUser(request.body);
        return response.json(isLoggedIn);
    } catch (error) {
        console.error(error);
        response.status(400).end('Error');
    }
});

module.exports = router;
