const jsonwebtoken = require('jsonwebtoken');

async function isLoggedIn(request) {
    const token = request.cookies.token;

    if (!token) {
        throw new Error('Unauthorized: No token provided');
    } else {
        const decodedPayload = jsonwebtoken.verify(token, process.env.SECRET);
        return decodedPayload.data;
    }
}

module.exports.isLoggedIn = isLoggedIn;
