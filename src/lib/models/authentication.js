const jsonwebtoken = require('jsonwebtoken');
const { isRegisteredUser } = require('./users');

async function getUser(request) {
    const token = request.cookies.token;

    if (!token) {
        throw new Error('Unauthorized: No token provided');
    } else {
        const decodedPayload = jsonwebtoken.verify(token, process.env.SECRET);
        return decodedPayload.data;
    }
}

async function verifyUser(request) {
    const token = request.cookies.token;

    if (!token) {
        return null;
    } else {
        const decodedPayload = jsonwebtoken.verify(token, process.env.SECRET);
        const user = decodedPayload.data;
        const userFoundInDB = await isRegisteredUser(user);
        return userFoundInDB ? token : null;
    }
}

module.exports.getUser = getUser;
module.exports.verifyUser = verifyUser;
