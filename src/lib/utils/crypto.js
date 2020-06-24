const bcrypt = require('bcryptjs');

async function encrypt(string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(string, salt);
    return hash;
}

module.exports.encrypt = encrypt;
