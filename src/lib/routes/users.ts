import { Request, Response, Router } from 'express';
import { registerUser } from '../models/users';

const router = Router();

router.post('/', async (request: Request, response: Response) => {
    try {
        const id = await registerUser(request.body);
        return response.json(id);
    } catch (error) {
        console.error(error);
        response.status(400).end('Error');
    }
});

module.exports = router;
