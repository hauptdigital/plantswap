const jsonwebtoken = require('jsonwebtoken');

async function getUser(request) {
    const token = request.cookies.token;

    if (!token) {
        throw new Error('Unauthorized: No token provided');
    } else {
        const decodedPayload = jsonwebtoken.verify(token, process.env.SECRET);
        return decodedPayload.data;
    }
}

module.exports.getUser = getUser;
