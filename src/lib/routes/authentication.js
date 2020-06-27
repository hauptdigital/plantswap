const { Router } = require('express');
const { isLoggedIn } = require('../models/authentication');
const jsonwebtoken = require('jsonwebtoken');

const router = Router();

router.get('/check', async (request, response) => {
    try {
        const result = await isLoggedIn(request);
        return response.json(result);
    } catch (error) {
        response.status(400).end(error.message);
    }
});

module.exports = router;
