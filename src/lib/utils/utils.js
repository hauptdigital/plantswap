function validateEmail(email) {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/;
    return emailRegex.test(email);
}

module.exports.validateEmail = validateEmail;
