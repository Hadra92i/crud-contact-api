import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    age: Number,
    user_id: String,
}, { timestamp: true });

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;