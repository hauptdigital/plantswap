const { Router } = require('express');
const { registerUser } = require('../models/users');

const router = Router();

router.post('/', async (request, response) => {
    try {
        const id = await registerUser(request.body);
        return response.json(id);
    } catch (error) {
        console.error(error);
        response.status(400).end('Error');
    }
});

module.exports = router;
