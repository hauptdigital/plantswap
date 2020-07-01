const mongoose = require('mongoose');
const { encrypt, comparePasswords } = require('../utils/crypto');
const { isValidEmail } = require('../utils/utils');

const userSchema = new mongoose.Schema(
    {
        userName: {
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
        country: { type: String },
        city: { type: String },
        profileImagePath: { type: String },
    },
    {
        collection: 'users',
        timestamps: true,
        get: (v) => v.toDateString(),
    },
);

const User = mongoose.model('User', userSchema);

userSchema.path('email').validate((email) => {
    return isValidEmail(email);
}, 'E-mail field does not have correct syntax.');

async function checkUserCredentials(userInput) {
    const user = await User.findOne({
        $or: [{ userName: userInput.userNameOrEmail }, { email: userInput.userNameOrEmail }],
    });
    const loginCredentialsAreCorrect = user ? await comparePasswords(userInput.password, user.password) : false;
    return loginCredentialsAreCorrect;
}

async function getUserNameByLoginCredentials(userNameOrEmail) {
    const user = await User.findOne({
        $or: [{ userName: userNameOrEmail }, { email: userNameOrEmail }],
    });
    return user.userName;
}

async function registerUser(userData) {
    const user = new User(userData);

    user.password = await encrypt(user.password);

    // Create new user
    const result = await user.save();
    return result._id;
}

async function getUser(userName) {
    const user = await User.findOne({ userName: userName }).select({
        userName: 1,
        about: 1,
        city: 1,
        profileImagePath: 1,
        _id: 0,
    });
    return user;
}

module.exports.registerUser = registerUser;
module.exports.checkUserCredentials = checkUserCredentials;
module.exports.getUser = getUser;
module.exports.getUserNameByLoginCredentials = getUserNameByLoginCredentials;
