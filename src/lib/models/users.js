const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        accountName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { collection: 'users' },
);

const User = mongoose.model('User', userSchema);

async function registerUser(userData) {
    const user = new User(userData);

    // encrypt password
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;

    // Create new user
    const result = await user.save();
    return result._id;
}

module.exports.registerUser = registerUser;
