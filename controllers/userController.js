import bcrypt from 'bcrypt';
import User from '../models/user.js';

// REGISTER
export const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// LOGIN
export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("User doesn't exist");
        
        const validatedPassword = await bcrypt.compare(req.body.password, user.password);
        !validatedPassword && res.status(400).json("Password not correct !");

        const { password, ...otherdatas } = user._doc;
        res.status(200).json(otherdatas);
    } catch (err) {
        res.status(500).json(err);
    }
}
