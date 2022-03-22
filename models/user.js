import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
}, {
    timestamp: true
});

const User = mongoose.model('User', UserSchema);

export default User;