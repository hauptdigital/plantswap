const mongoose = require('mongoose');
const { encrypt } = require('../utils/crypto');
const { validateEmail } = require('../utils/utils');

const userSchema = new mongoose.Schema(
    {
        accountName: { type: String, required: true, index: { unique: true, dropDups: true } },
        email: { type: String, required: true, lowercase: true, index: { unique: true, dropDups: true } },
        password: { type: String, required: true },
    },
    {
        collection: 'users',
        timestamps: true,
        get: (v) => v.toDateString(),
    },
);

const User = mongoose.model('User', userSchema);

userSchema.path('email').validate((email) => {
    return validateEmail(email);
}, 'E-mail field does not have correct syntax.');

async function registerUser(userData) {
    const user = new User(userData);

    validateEmail();

    user.password = await encrypt(user.password);

    // Create new user
    const result = await user.save();
    return result._id;
}

module.exports.registerUser = registerUser;
