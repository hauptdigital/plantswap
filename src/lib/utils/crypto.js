const bcrypt = require('bcryptjs');

async function encrypt(string) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(string, salt);
    return hash;
}

async function comparePasswords(clearTextPassword, hash) {
    return await bcrypt.compare(clearTextPassword, hash);
}

module.exports.encrypt = encrypt;
module.exports.comparePasswords = comparePasswords;
