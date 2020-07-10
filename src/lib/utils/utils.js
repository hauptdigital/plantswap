const crypto = require('crypto');

function isValidEmail(email) {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/;
    return emailRegex.test(email);
}

function generateRandomUrlFriendlyString(size) {
    const randomString = crypto.randomBytes(size).toString('hex').slice(0, size);
    console.log(randomString);
    return randomString;
}

module.exports.isValidEmail = isValidEmail;
module.exports.generateRandomUrlFriendlyString = generateRandomUrlFriendlyString;
