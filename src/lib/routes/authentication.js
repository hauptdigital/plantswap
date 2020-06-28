const { Router } = require('express');
const { getUser, verifyUser } = require('../models/authentication');

const router = Router();

router.get('/user', async (request, response) => {
    try {
        const user = await getUser(request);
        return response.json(user);
    } catch (error) {
        response.status(400).end(error.message);
    }
});

router.get('/verify', async (request, response) => {
    try {
        const token = await verifyUser(request);
        return response.json(token);
    } catch (error) {
        response.status(400).end(error.message);
    }
});

module.exports = router;
