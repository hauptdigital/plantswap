import mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        accountName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { collection: 'users' },
);

userSchema.methods.encrypt = function () {
    console.log('encrypting');
};

const User = mongoose.model('User', userSchema);

export async function registerUser(userData: Record<string, unknown>) {
    const user = new User(userData);

    // Create new user
    const result = await user.save();
    return result._id;
}
