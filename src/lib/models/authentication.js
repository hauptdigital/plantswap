const jsonwebtoken = require('jsonwebtoken');

async function getAuthenticatedUser(request) {
    const token = request.cookies.token;

    if (!token) {
        return null;
    } else {
        const decodedPayload = jsonwebtoken.verify(token, process.env.SECRET);
        const user = decodedPayload.data;
        return user;
    }
}

module.exports.getAuthenticatedUser = getAuthenticatedUser;
