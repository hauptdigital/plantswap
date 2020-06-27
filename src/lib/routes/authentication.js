const { Router } = require('express');
const { getUser } = require('../models/authentication');

const router = Router();

router.get('/user', async (request, response) => {
    try {
        const user = await getUser(request);
        return response.json(user);
    } catch (error) {
        response.status(400).end(error.message);
    }
});

module.exports = router;
