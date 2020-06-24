const mongoose = require('mongoose');
const { encrypt } = require('../utils/crypto');
const { validateEmail } = require('../utils/utils');

const userSchema = new mongoose.Schema(
    {
        accountName: {
            type: String,
            minlength: [3, 'Username must be at least 3 characters.'],
            maxlength: [20, 'Username must be less than 20 characters.'],
            required: [true, 'Username cannot be blank.'],
            trim: true,
            lowercase: true,
            index: { unique: true },
        },
        email: { type: String, required: true, lowercase: true, index: { unique: true } },
        password: { type: String, required: true, trim: true },
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

    user.password = await encrypt(user.password);

    // Create new user
    const result = await user.save();
    return result._id;
}

module.exports.registerUser = registerUser;
